// Chatbot Toggle Functionality
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('open');
});

// Chatbot Interaction Logic
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('chat-input').value;

    // Append user message
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    userMessage.style.cssText = 'align-self: flex-end; background-color: #4CAF50; color: white; padding: 5px 10px; margin: 5px; border-radius: 10px;';
    chatMessages.appendChild(userMessage);

    // Clear input
    document.getElementById('chat-input').value = '';

    // Simulate Bot Reply
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
        botMessage.style.cssText = 'align-self: flex-start; background-color: #ddd; padding: 5px 10px; margin: 5px; border-radius: 10px;';
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }, 1000);
});
