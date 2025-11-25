// command
// npm init -y
// npm install express


const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, './public/about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, './public/contact.html')));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
