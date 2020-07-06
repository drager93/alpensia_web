import express from "express";
import path from "path";

const app = express();

app.get("/:filename", (req, res) => {
  res.download(path.join(__dirname, `../assets/documents/${req.params.filename}`), req.params.filename);
});

export default app;
