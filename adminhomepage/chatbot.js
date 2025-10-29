// Chatbot toggle and logic for admin and student pages
// Reuse the same logic as firstpage/chatbot.js

document.addEventListener('DOMContentLoaded', () => {
  // Toggle chatbot visibility
  const toggleBtn = document.getElementById('chatbot-toggle');
  const chatbotContainer = document.getElementById('chatbot-container');
  if (toggleBtn && chatbotContainer) {
    toggleBtn.addEventListener('click', () => {
      chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
    });
  }

  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  if (!chatbotForm || !chatbotInput || !chatbotMessages) return;

  chatbotForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const userMsg = chatbotInput.value.trim();
    if (!userMsg) return;

    appendMessage('user', userMsg);
    chatbotInput.value = '';
    appendMessage('bot', 'Thinking...');

    // Custom Q&A logic for club portal
    let botMsg = '';
    const msg = userMsg.toLowerCase();
    if (msg.includes('event date') || msg.includes('date of event')) {
      botMsg = 'Event dates:\n- Hackathon: Oct 20\n- Tech Talk: Nov 5\n- Sports Meet: Nov 15';
    } else if (msg.includes('registered event') || msg.includes('my events')) {
      botMsg = 'Events registered:\n- Hackathon\n- Tech Talk';
    } else if (msg.includes('enrolled club') || msg.includes('my clubs')) {
      botMsg = 'Enrolled clubs:\n- Coding Club\n- Sports Club';
    } else if (msg.includes('club membership') || msg.includes('my membership')) {
      botMsg = 'Club membership details:\n- Coding Club: Active\n- Sports Club: Active';
    } else if (msg.includes('about the club') || msg.includes('club info')) {
      botMsg = 'About the club:\nCoding Club: Focuses on programming and tech events.\nSports Club: Organizes games and tournaments.';
    } else {
      botMsg = 'How can I help you?\nYou can ask about:\n- Event dates\n- Events registered\n- Enrolled club\n- Club membership\n- About the club';
    }
    updateLastBotMessage(botMsg);
  });

  function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'chatbot-user' : 'chatbot-bot';
    msgDiv.textContent = (sender === 'user' ? 'You: ' : 'Bot: ') + text;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function updateLastBotMessage(text) {
    const msgs = chatbotMessages.querySelectorAll('.chatbot-bot');
    if (msgs.length) {
      msgs[msgs.length - 1].textContent = 'Bot: ' + text;
    }
  }
});
