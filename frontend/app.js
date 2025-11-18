import React, { useState } from "react";
import './App.css';
export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  async function shorten(e) {
    e.preventDefault();
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ original: url })
    });
    const data = await res.json();
    setShortUrl(`http://localhost:5000/${data.shortId}`);;
    setUrl("");
  }
  return (
    <div style={{ padding: 20 }}>
      <h2>URL Shortener</h2>
      <form onSubmit={shorten}>
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter full URL"
          style={{ width: 300 }}
        />
        <button>Shorten</button>
      </form>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
}
