const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
// Serve static frontend files (html, css, js)
app.use(express.static(path.join(__dirname)));

const DB_FILE = path.join(__dirname, 'users.json');
const SECRET_KEY = "filmago_super_secret_key";

if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({}));
}

function getDB() {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: "Access Denied" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid Token" });
        req.user = user;
        next();
    });
}

app.post('/api/auth/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !password) return res.status(400).json({ error: "Username and password required" });

        const db = getDB();
        if (db[username]) return res.status(409).json({ error: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        db[username] = {
            password: hashedPassword,
            email: email,
            data: {}
        };
        saveDB(db);

        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' });
        res.status(201).json({ message: "User created", token, username });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const db = getDB();

        if (!db[username]) return res.status(400).json({ error: "User not found" });

        const validPassword = await bcrypt.compare(password, db[username].password);
        if (!validPassword) return res.status(401).json({ error: "Invalid password" });

        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ message: "Login successful", token, username });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Sync data TO cloud
app.post('/api/user/data', authenticateToken, (req, res) => {
    const username = req.user.username;
    const { key, value } = req.body;

    const db = getDB();
    if (!db[username]) return res.status(400).json({ error: "User not found" });

    db[username].data[key] = value;
    saveDB(db);
    res.json({ success: true });
});

// Sync data FROM cloud
app.get('/api/user/data', authenticateToken, (req, res) => {
    const username = req.user.username;
    const db = getDB();
    if (!db[username]) return res.status(400).json({ error: "User not found" });

    res.json(db[username].data);
});

// Fallback to routing index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Filmago Express Backend running on http://localhost:${PORT}`));
