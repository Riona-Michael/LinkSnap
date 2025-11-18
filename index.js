
const express = require("express");
const mongoose = require("mongoose");
const { nanoid } = require("nanoid"); // make sure nanoid v3 for CommonJS
const app = express();
app.use(express.json());
// Connect to MongoDB (local)
mongoose.connect("mongodb://127.0.0.1:27017/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));
// URL Schema
const Url = mongoose.model("Url", new mongoose.Schema({
  original: String,
  shortId: String
}));
// POST: create short URL
app.post("/api/shorten", async (req, res) => {
  try {
    const { original } = req.body;
    if (!original) return res.status(400).json({ error: "URL is required" });
    const shortId = nanoid(6);
    const url = await Url.create({ original, shortId });
    res.json(url);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});
// GET: redirect short URL
app.get("/:shortId", async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });
    if (!url) return res.status(404).send("URL not found");
    res.redirect(url.original); // redirects user to original URL
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
// Start backend server
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
