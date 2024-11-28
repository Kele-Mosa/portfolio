// Chatbox toggle functionality
// const chatboxToggle = document.getElementById('chatbox-toggle');
const chatboxBody = document.getElementById("chatbox-body");
const chatbot = document.getElementById("chatbot");
const chatbox = document.getElementById("chatbox");




// chatboxToggle.addEventListener('click', () => {
//     if (chatboxBody.style.display === 'block') {
//         chatboxBody.style.display = 'none';
//         chatboxToggle.textContent = '+';
//     } else {
//         chatboxBody.style.display = 'block';
//         chatboxToggle.textContent = '-';
//     }
// });

// Chat functionality
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input value
    const userInput = document.getElementById('chat-input').value;
    

    // Add user message to chat
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${userInput}`;
    userMessage.style.color = "#0078D7"; // User messages in a different color
    chatMessages.appendChild(userMessage);

    // Simulate a bot response
    const botMessage = document.createElement('p');
    botMessage.textContent = `Bot: Thanks for reaching out! I'll respond shortly.`;
    botMessage.style.color = "#333"; // Bot messages in a neutral color
    setTimeout(() => {
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }, 1000);

    // Clear input field
    document.getElementById('chat-input').value = '';
});

// const botMessage = document.createElement('p');
// botMessage.innerHTML = `
//     Bot: How can I assist you today? <br>
//     <button onclick="askAboutSkills()">Skills</button>
//     <button onclick="askAboutProjects()">Projects</button>
//     <button onclick="askAboutServices()">Services</button>
// `;
// chatMessages.appendChild(botMessage);

// function askAboutSkills() {
//     const message = document.createElement('p');
//     message.textContent = "You: I'd like to learn about your skills.";
//     chatMessages.appendChild(message);

//     const response = document.createElement('p');
//     response.textContent = "Bot: I have expertise in HTML, CSS, JavaScript, Node.js, and more. Feel free to ask about any specific skill!";
//     chatMessages.appendChild(response);
// }

