import express from "express";
import { profile } from "./data/profile.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.disable("x-powered-by");

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/profile", (_req, res) => {
  res.set("Cache-Control", "public, max-age=300");
  res.json(profile);
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`portfolio-backend listening on :${PORT}`);
});
