// Edited by Teesha Khattar - July 2025
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello teesha using Docker!!!</h1>");
});

app.listen(PORT, () => {
    console.log("Server started at PORT :", PORT);
});


