const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/generate", (req, res) => {
  const { prompt } = req.body;
  const templates = [
    `Hello {name}, ${prompt}! Wishing you a wonderful day with your family. Namaste!`,
    `Hi {name}, ${prompt}! Hope you have a joyful and memorable celebration. Namaste!`,
    `Dear {name}, ${prompt}! May your day be filled with happiness and smiles. Namaste!`
  ];

  const message = templates[Math.floor(Math.random() * templates.length)];
  res.json({ message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
