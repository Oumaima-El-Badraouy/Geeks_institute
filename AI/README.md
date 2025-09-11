# Recruiter Assistant (CLI) — Minimal

## Setup
1. Ensure Python 3.8+ installed.
2. Create folder `data/` and put provided `candidates.json`, `jobs.json`, `shortlists.json`.
3. Put `recruiter_assistant.py` in same folder (project root).
4. Run:

## Example prompts (copy/paste into the assistant CLI)
1. `Find 5 React interns in Casablanca, 0-2 years, available this month`
2. `Save #1 #3 as "FE-Intern-A"`
3. `Draft outreach email for "FE-Intern-A" using job "Frontend Intern"`
4. `Show analytics`

## Notes
- Shortlists are saved to `data/shortlists.json`.
- Email preview prints subject, plaintext and HTML (simple inline CSS).
- Simple scoring rules implemented per spec.

6) Example console run (simulated) — HTML preview printed
> Find 5 React interns in Casablanca, 0-2 years, available this month
Found top 5 results:
#01 Amina El Idrissi — amina@example.com — Casablanca — 1y — score 5 — React match (+2) , Casablanca (+1) , available in 9d (+1) , 1y fits (±1) (+1)
#02 Lina Bourkia — lina@example.com — Casablanca — 1y — score 4 — React match (+2) , Casablanca (+1) , 1y fits (±1) (+1)
#03 Karim Aziz — karim@example.com — Casablanca — 1y — score 3 — React match (+2) , Casablanca (+1)
#04 Fatima Lahbabi — fatima@example.com — Casablanca — 1y — score 3 — React match (+2) , Casablanca (+1)
#05 Khadija Mansouri — khadija@example.com — Casablanca — 1y — score 3 — React match (+2) , SCREEN (+1)

> Save #1 #3 as "FE-Intern-A"
Saved shortlist 'FE-Intern-A' with 2 items.

> Draft outreach email for "FE-Intern-A" using job "Frontend Intern"

--- SUBJECT ---
Frontend Intern opportunity — quick chat?

--- PLAINTEXT ---
Hi Amina,

I’m reaching out because we have an opening for Frontend Intern. I looked at your profile and thought you could be a great fit.

Would you be open to a quick 15-minute chat this week?

Best,
Recruiter

--- HTML PREVIEW ---
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Frontend Intern opportunity — quick chat?</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height:1.4;">
    <div style="max-width:600px; padding:16px; border:1px solid #ddd; border-radius:8px;">
      <h2 style="margin-top:0;">Frontend Intern opportunity — quick chat?</h2>
      <div>Hi, Amina, Sara<br><br>I’m reaching out because we have an opening for Frontend Intern. I looked at your profile and thought you could be a great fit.<br><br>Would you be open to a quick 15-minute chat this week?<br><br>Best,<br>Recruiter<br></div>
      <p style="margin-top:20px; color:#555;">This is a preview. Reply to proceed.</p>
    </div>
  </body>
</html>








