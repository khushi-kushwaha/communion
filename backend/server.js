const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, "data.json");

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// API to get stored data
app.get("/data", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});

// API to add new data
app.post("/add-event", (req, res) => {
  const newData = req.body;
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });

    const jsonData = JSON.parse(data);
    jsonData.push(newData); // Append new data

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error writing data" });
      res.json({ success: true, message: "Data added successfully!" });
    });
  });
});

// Serve React App for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
