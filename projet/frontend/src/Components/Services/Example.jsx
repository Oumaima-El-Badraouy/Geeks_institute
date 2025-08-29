import { useState } from "react";

export default function Example() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async () => {
    setLoading(true); setError(""); setResult(null);
    try {
      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const pickColor = (score)=>{
    if(score >= 70) return "#ef4444"; // احتمال عالي
    if(score >= 40) return "#f59e0b"; // متوسط
    return "#22c55e"; // ضعيف
  };

  return (
    <div style={{maxWidth: 900, margin: "40px auto", padding: 16, fontFamily: "system-ui"}}>
      <h1 style={{fontSize: 28, fontWeight: 700}}>AI Code Checker</h1>
      <p style={{opacity: .8, marginTop: 4}}>حطّ الكود ديالك ونحلّلوه بإشارات (heuristics).</p>

      <textarea
        value={code}
        onChange={e=>setCode(e.target.value)}
        placeholder="لسّق الكود هنا..."
        style={{width:"100%", height: 260, padding: 12, marginTop: 16, borderRadius: 12, border: "1px solid #ddd"}}
      />

      <div style={{display:"flex", gap:12, marginTop: 12}}>
        <button onClick={analyze} disabled={loading || !code.trim()}
          style={{padding:"10px 16px", borderRadius: 12, border: "none", background:"#111827", color:"white", cursor:"pointer"}}>
          {loading ? "كايتحلّل..." : "حلّل"}
        </button>
        <button onClick={()=>{setCode(""); setResult(null); setError("");}}
          style={{padding:"10px 16px", borderRadius: 12, border: "1px solid #ddd", background:"white", cursor:"pointer"}}>
          مسح
        </button>
      </div>

      {error && <div style={{marginTop:12, color:"#ef4444"}}>{error}</div>}

      {result && (
        <div style={{marginTop: 20, padding: 16, border: "1px solid #eee", borderRadius: 14}}>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div style={{
              width: 18, height: 18, borderRadius: 9999, background: pickColor(result.score)
            }} />
            <h2 style={{margin:0}}>Score: {result.score} / 100 ({result.confidence_label})</h2>
          </div>

          <h3 style={{marginTop:12}}>الأسباب:</h3>
          <ul>
            {result.reasons.map((r,i)=><li key={i}>{r}</li>)}
          </ul>

          <details style={{marginTop:8}}>
            <summary>Features</summary>
            <pre style={{whiteSpace:"pre-wrap", background:"#f8fafc", padding:12, borderRadius:10}}>
              {JSON.stringify(result.features, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
