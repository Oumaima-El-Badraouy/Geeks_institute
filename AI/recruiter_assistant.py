import json
import re #regex z3ma
from datetime import datetime, timedelta
from pathlib import Path
from collections import Counter

DATA_DIR = Path("data")
CAND_FILE = DATA_DIR / "candidates.json"
JOB_FILE = DATA_DIR / "jobs.json"
SHORT_FILE = DATA_DIR / "shortlists.json"

# ---------- helpers ----------
def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def parse_date(s):
    return datetime.strptime(s, "%Y-%m-%d").date()

# ---------- parse_query ----------
def parse_query(text):
    t = text.lower()
    skills = re.findall(r"\b([A-Za-z+#]+)\b", text)
    skill_set = []
    for s in ["React","JS","JavaScript","Python","SQL","Vue","Angular","Git","HTML","CSS","TS","TypeScript"]:
        if re.search(r"\b" + re.escape(s.lower()) + r"\b", t):
            skill_set.append(s)
    # location
    m_loc = re.search(r"in\s+([A-Z][a-zA-Z\u0600-\u06FF\- ]+)|in\s+([a-zA-Z\-]+)", text)
    location = None
    if "casablanca" in t:
        location = "Casablanca"
    elif "rabat" in t:
        location = "Rabat"
    elif "marrakech" in t or "marrakec" in t:
        location = "Marrakech"
    elif "fes" in t:
        location = "Fes"
    minExp = None
    maxExp = None
    m_exp = re.search(r"(\d+)\s*[-–to]+\s*(\d+)\s*(?:years|yrs|y)?", t)
    if not m_exp:
        m_exp = re.search(r"(\d+)\s*(?:years|yrs|y)\s*(?:or less|or under|or less)?", t)
        if m_exp:
            minExp = 0
            maxExp = int(m_exp.group(1))
    else:
        minExp = int(m_exp.group(1))
        maxExp = int(m_exp.group(2))
    topN = 5
    m_top = re.search(r"find\s+(\d+)", t)
    if m_top:
        topN = int(m_top.group(1))
    availabilityWindowDays = None
    if "available this month" in t:
        availabilityWindowDays = 30
    elif "available this week" in t:
        availabilityWindowDays = 7
    elif "available next" in t:
        availabilityWindowDays = 45
    elif "available" in t and "month" in t:
        availabilityWindowDays = 30

    return {
        "skills": skill_set,
        "location": location,
        "minExp": minExp,
        "maxExp": maxExp,
        "availabilityWindowDays": availabilityWindowDays,
        "topN": topN
    }

# ---------- scoring ----------
def score_candidate(candidate, filters):
    score = 0
    reasons = []
    req_skills = filters.get("skills", [])
    skill_matches = 0
    for s in req_skills:
        for cs in candidate.get("skills", []):
            if s.lower() == cs.lower():
                skill_matches += 1
                break
    score += 2 * skill_matches
    if skill_matches:
        reasons.append(f"{'+'.join([s for s in req_skills if any(s.lower()==cs.lower() for cs in candidate.get('skills',[]))])} match (+{2*skill_matches})")
    if filters.get("location") and candidate.get("location","").lower() == filters["location"].lower():
        score += 1
        reasons.append(f"{candidate['location']} (+1)")
    minExp = filters.get("minExp")
    maxExp = filters.get("maxExp")
    if minExp is not None and maxExp is not None:
        exp = candidate.get("experienceYears", 0)
        if exp >= (minExp - 1) and exp <= (maxExp + 1):
            score += 1
            reasons.append(f"{exp}y fits (±1) (+1)")
    win = filters.get("availabilityWindowDays")
    if win:
        try:
            avail = parse_date(candidate.get("availabilityDate"))
            days = (avail - datetime.now().date()).days
            if 0 <= days <= win:
                score += 1
                reasons.append(f"available in {days}d (+1)")
        except Exception:
            pass
    return score, " , ".join(reasons)

# ---------- search ----------
def search_candidates(filters, candidates):
    scored = []
    for idx, c in enumerate(candidates, start=1):
        sc, reason = score_candidate(c, filters)
        scored.append({"index": idx, "candidate": c, "score": sc, "reason": reason if reason else "no matches"})
    scored_sorted = sorted(scored, key=lambda x: x["score"], reverse=True)
    topN = filters.get("topN", 5)
    return scored_sorted[:topN]

# ---------- shortlists ----------
def load_shortlists():
    if not SHORT_FILE.exists():
        save_json(SHORT_FILE, [])
    return load_json(SHORT_FILE)

def save_shortlist(name, indices, candidates):
    shortlists = load_shortlists()
    sel = []
    for i in indices:
        if 1 <= i <= len(candidates):
            sel.append(candidates[i-1])
    entry = {"name": name, "createdAt": datetime.now().isoformat(), "candidates": sel}
    shortlists.append(entry)
    save_json(SHORT_FILE, shortlists)
    return True

# ---------- email drafting ----------
def draft_email(recipients, job_title, tone="friendly", closing="Best,\nRecruiter"):
    if isinstance(recipients, list) and recipients and isinstance(recipients[0], dict):
        emails = [r["email"] for r in recipients]
        names = [r.get("firstName","") for r in recipients]
    else:
        emails = recipients
        names = [None]
    subject = f"{job_title} opportunity — quick chat?"
    if tone == "formal":
        intro = "Hello,"
    else:
        intro = "Hi,"
    if names:
        intro += " " + ", ".join(names)  # يضيف جميع الأسماء مفصولة بكوما

    text = f"""{intro}

I’m reaching out because we have an opening for {job_title}. I looked at your profile and thought you could be a great fit.

Would you be open to a quick 15-minute chat this week?

{closing}
"""
    return {"subject": subject, "text": text, "to": emails}

def html_template(email_obj):
    # simple inline CSS
    subject = email_obj["subject"]
    text = email_obj["text"].replace("\n", "<br>")
    html = f"""<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>{subject}</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height:1.4;">
    <div style="max-width:600px; padding:16px; border:1px solid #ddd; border-radius:8px;">
      <h2 style="margin-top:0;">{subject}</h2>
      <div>{text}</div>
      <p style="margin-top:20px; color:#555;">This is a preview. Reply to proceed.</p>
    </div>
  </body>
</html>"""
    return html

# ---------- analytics ----------
def analytics_summary(candidates):
    countByStage = Counter([c.get("stage","UNKNOWN") for c in candidates])
    skills = Counter()
    for c in candidates:
        for s in c.get("skills", []):
            skills[s] += 1
    topSkills = skills.most_common(3)
    return {"countByStage": dict(countByStage), "topSkills": topSkills}

# ---------- CLI ----------
def print_candidate_short(cobj):
    c = cobj["candidate"]
    print(f"#{cobj['index']:02d} {c['firstName']} {c['lastName']} — {c['email']} — {c['location']} — {c['experienceYears']}y — score {cobj['score']} — {cobj['reason']}")

def main_loop():
    DATA_DIR.mkdir(exist_ok=True)
    candidates = load_json(CAND_FILE)
    jobs = load_json(JOB_FILE)
    print("Assistant: Hello! (type 'help' for commands)")

    last_search = []
    while True:
        cmd = input("\n> ").strip()
        if not cmd:
            continue
        low = cmd.lower()
        if low.startswith("find"):
            filters = parse_query(cmd)
            results = search_candidates(filters, candidates)
            last_search = results
            print(f"Found top {len(results)} results:")
            for r in results:
                print_candidate_short(r)
        elif low.startswith("save"):
            # syntax: Save #1 #3 #4 as "FE-Intern-A"
            m = re.search(r"save\s+((?:#\d+\s*)+)\s+as\s+\"?([^\"]+)\"?", cmd, re.I)
            if not m:
                print("Syntax: Save #1 #3 as \"Name\"")
                continue
            idxs = [int(x.replace("#","")) for x in re.findall(r"#(\d+)", m.group(1))]
            name = m.group(2).strip()
            ok = save_shortlist(name, idxs, candidates)
            print(f"Saved shortlist '{name}' with {len(idxs)} items.")
        elif low.startswith("draft"):
            # Draft outreach email for "FE-Intern-A" using job "Frontend Intern"
            m = re.search(r'draft.*for\s+"?([^"]+)"?\s+using job\s+"?([^"]+)"?', cmd, re.I)
            if not m:
                print('Syntax: Draft outreach email for "SHORTLIST_NAME" using job "Job Title"')
                continue
            list_name = m.group(1)
            job_title = m.group(2)
            shortlists = load_shortlists()
            matches = [s for s in shortlists if s["name"].lower()==list_name.lower()]
            if not matches:
                print("Shortlist not found.")
                continue
            recipients = matches[0]["candidates"]
            email_obj = draft_email(recipients, job_title, tone="friendly")
            html = html_template(email_obj)
            print("\n--- SUBJECT ---")
            print(email_obj["subject"])
            print("\n--- PLAINTEXT ---")
            print(email_obj["text"])
            print("\n--- HTML PREVIEW ---")
            print(html)
            # allow one edit to subject or closing
            edit = input("\nEdit subject or closing? (y/n) ").strip().lower()
            if edit == "y":
                new_subject = input("New subject (leave empty to keep): ").strip()
                new_closing = input("New closing (leave empty to keep): ").strip()
                if new_subject:
                    email_obj["subject"] = new_subject
                if new_closing:
                    # replace closing in text (naive: everything after last blank line)
                    email_obj["text"] = re.sub(r"\n\s*\Z", "", email_obj["text"])  # strip ending whitespace
                    parts = email_obj["text"].rsplit("\n", 3)
                    # naive; just append new closing
                    email_obj["text"] = re.sub(r"(?s)(.*)","\\1", email_obj["text"]) + "\n" + new_closing
                html = html_template(email_obj)
                print("\n--- REPREVIEW ---")
                print("SUBJECT:", email_obj["subject"])
                print(html)
        elif low.startswith("show analytics") or low.startswith("analytics") or low=="show analytics":
            summary = analytics_summary(candidates)
            print("Pipeline by stage:")
            for k,v in summary["countByStage"].items():
                print(f"  {k} = {v}")
            print("Top skills:")
            for s,cnt in summary["topSkills"]:
                print(f"  {s} ({cnt})")
        elif low == "list jobs":
            print("Jobs:")
            for j in jobs:
                print(f"- {j['title']} ({j['location']}) — {', '.join(j['skillsRequired'])}")
        elif low == "list shortlists":
            sl = load_shortlists()
            for s in sl:
                print(f"- {s['name']} ({len(s['candidates'])} candidates)")
        elif low == "help":
            print("""
Commands (examples):
- Find 5 React interns in Casablanca with 0-2 years, available this month
- Save #1 #3 as "FE-Intern-A"
- Draft outreach email for "FE-Intern-A" using job "Frontend Intern"
- List jobs
- List shortlists
- Show analytics
- Exit
""")
        elif low == "exit" or low=="quit":
            print("Bye!")
            break
        else:
            print("Unknown command. Type 'help' for examples.")

if __name__ == "__main__":
    main_loop()
