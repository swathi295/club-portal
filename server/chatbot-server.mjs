// Express server to proxy OpenAI API requests (ES Module version)
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const userMsg = req.body.message;
  if (!userMsg) return res.status(400).json({ error: 'No message provided.' });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for college club portal.' },
          { role: 'user', content: userMsg }
        ]
      })
    });
    const data = await response.json();
    const botMsg = data.choices?.[0]?.message?.content || 'Sorry, I could not respond.';
    res.json({ reply: botMsg });
  } catch (err) {
    res.status(500).json({ error: 'Error connecting to GenAI API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
