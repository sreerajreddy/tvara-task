const express = require('express');
const cors = require('cors');
require('dotenv').config();

const geminiRoute = require('./routes/gemini');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', geminiRoute);

// Health
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0" () => console.log(`Server running on port ${PORT}`));


