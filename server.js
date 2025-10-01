
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); 

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


app.listen(8080, () => {
  console.log("Server running on port 8080");
});
