export default async function handler(req, res) {
  const path = req.url.replace("/api", "");
  const target = "https://api.themoviedb.org" + path;
  try {
    const r = await fetch(target, { method: req.method });
    const data = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(r.status).send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
