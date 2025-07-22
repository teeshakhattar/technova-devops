const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello shreya using Docker!!!</h1>");
});

app.listen(PORT, () => {
    console.log("Server started at PORT :", PORT);
});


