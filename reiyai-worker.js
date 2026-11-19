export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405, headers: cors });
    if (!env.GROQ_API_KEY) return Response.json({ error: "ReiyAI server key is not configured." }, { status: 503, headers: cors });
    try {
      const body = await request.json();
      const message = String(body.message || "").slice(0, 6000);
      if (!message.trim()) return Response.json({ error: "Message is required." }, { status: 400, headers: cors });
      const context = body.context || {};
      const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
      const system = [
        "You are ReiyAI, a friendly, patient C++ and data-structures tutor inside ReiyCode.",
        "Always begin a new conversation with the exact welcome phrase only when asked to welcome; otherwise answer the user's coding question.",
        "Use the current problem and editor code supplied in context. Never pretend code was executed.",
        "For hints, reveal one progressive hint at a time and do not reveal the full solution unless asked.",
        "For debugging, identify the likely bug, explain why it happens, and show the smallest useful correction.",
        "For explanations, use beginner-friendly steps and small examples.",
        "For optimization, discuss time and space complexity and trade-offs.",
        "Be concise, supportive, and precise. If context is missing, ask one focused question.",
        "Current coding context: " + JSON.stringify(context).slice(0, 14000)
      ].join("\n");
      const messages = [
        { role: "system", content: system },
        ...history.filter(m => ["user", "assistant"].includes(m.role)).map(m => ({ role: m.role, content: String(m.content || "").slice(0, 5000) })),
        { role: "user", content: message }
      ];
      const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Authorization": "Bearer " + env.GROQ_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages, temperature: 0.35, max_tokens: 1200 })
      });
      const data = await upstream.json();
      if (!upstream.ok) return Response.json({ error: data.error?.message || "AI provider request failed." }, { status: 502, headers: cors });
      const reply = data.choices?.[0]?.message?.content || "I couldn't generate a reply. Please try again.";
      return Response.json({ reply }, { headers: { ...cors, "Content-Type": "application/json" } });
    } catch (error) {
      return Response.json({ error: "Invalid request or ReiyAI service error." }, { status: 400, headers: cors });
    }
  }
};
