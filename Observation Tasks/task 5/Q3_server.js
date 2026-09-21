const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Student Server");
});

app.get("/students", (req, res) => {
    res.json([
        "Karthik",
        "Rahul",
        "Ananya",
        "Priya",
        "Vamsi"
    ]);
});

app.get("/about", (req, res) => {
    res.send("This is a basic Express.js Student Management Application.");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});