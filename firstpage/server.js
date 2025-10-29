// Node.js Express backend for chat bot using OpenAI API
// Save as server.js

const express = require('express');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) return res.status(400).json({ error: 'No message provided.' });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 100
      })
    });
    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || 'Sorry, no response.';
    res.json({ reply: botReply });
  } catch (err) {
    res.status(500).json({ error: 'API error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
