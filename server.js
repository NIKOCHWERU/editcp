const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
// Menggunakan port 3053 sesuai permintaan USER
const PORT = process.env.PORT || 3053;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));

// Melayani file statis
app.use(express.static(__dirname));

// API: Load Data
app.get('/api/load', (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        try {
            res.json(JSON.parse(data));
        } catch (e) {
            res.status(500).json({ error: 'Failed to parse data' });
        }
    } else {
        res.json({ htmlData: null });
    }
});

// API: Save Data
app.post('/api/save', (req, res) => {
    const { htmlData } = req.body;
    if (!htmlData) {
        return res.status(400).json({ error: 'No data provided' });
    }

    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ htmlData })); // Removed pretty-print for speed
        res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`Company Profile App is running!`);
    console.log(`Local URL: http://localhost:${PORT}`);
    console.log(`Public URL: http://editcp.narasumberhukum.online/cvberkahjayatechnik`);
    console.log(`PM2 Name: cp-berkah-jaya`);
    console.log(`Port: ${PORT}`);
    console.log(`================================================`);
});
