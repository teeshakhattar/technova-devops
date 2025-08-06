const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Hello! This is our DevOps Project backend.');
});

// About route
app.get('/about', (req, res) => {
    res.send('This project simulates fall detection and backend alerts.');
});

// Simulated status route
app.get('/status', (req, res) => {
    res.json({ server: 'online', container: 'running', timestamp: new Date() });
});

// Fall detection API route (dummy)
app.get('/fall-detected', (req, res) => {
    res.json({
        status: 'Fall detected!',
        location: 'Room A23',
        time: new Date()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

