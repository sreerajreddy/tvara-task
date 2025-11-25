const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            {
                contents: [{ parts: [{ text: prompt }] }]
            },
            {
                params: { key: process.env.GEMINI_API_KEY }
            }
        );

        res.json({ response: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to call Gemini API" });
    }
});

module.exports = router;
