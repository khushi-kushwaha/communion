// const express = require("express");
// const fs = require("fs");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const DATA_FILE = "./data.json";

// // Get stored data
// app.get("/data", (req, res) => {
//   fs.readFile(DATA_FILE, (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading data" });
//     res.json(JSON.parse(data));
//   });
// });

// // Add new data
// app.post("/add-event", (req, res) => {
//   const newData = req.body;
//   fs.readFile(DATA_FILE, (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading data" });

//     const jsonData = JSON.parse(data);
//     jsonData.push(newData); // Append new data

//     fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) return res.status(500).json({ error: "Error writing data" });
//       res.json({ success: true, message: "Data added successfully!" });
//     });
//   });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));


const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const DATA_FILE = path.join(__dirname, "data.json");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Get stored data
app.get("/data", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});

// Add new data
app.post("/add-event", (req, res) => {
  const newData = req.body;
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });

    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      return res.status(500).json({ error: "Error parsing JSON data" });
    }

    jsonData.push(newData);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error writing data" });
      res.json({ success: true, message: "Data added successfully!" });
    });
  });
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
