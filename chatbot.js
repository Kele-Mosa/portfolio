document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const chatbotIcon = document.querySelector('#chatbot-icon');
    const chatbotPopup = document.querySelector('#chatbot');
    const closeButton = document.querySelector('#close-btn');
    const sendButton = document.querySelector('#send-btn');
    const chatMessage = document.querySelector('#chat-message');
    const chatWindow = document.querySelector('#chat-window');
 
    // Open chatbot popup
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', () => {
            chatbotPopup.style.display = 'block'; // Show chatbot popup
        });
    } else {
        console.error('Chatbot icon not found');
    }
 
    // Close chatbot popup
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            chatbotPopup.style.display = 'none'; // Hide chatbot popup
        });
    } else {
        console.error('Close button not found');
    }
 
    // Send message and generate response
    if (sendButton && chatMessage && chatWindow) {
        const addMessage = (message, sender) => {
            const messageElement = document.createElement('li');
            messageElement.textContent = `${sender}: ${message}`;
            messageElement.classList.add(sender.toLowerCase()); // Add class for styling
            chatWindow.appendChild(messageElement);
            chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
        };
 
        const getResumeInfo = (query) => {
            switch (query.toLowerCase()) {
                case 'skills':
                    return Array.from(document.querySelectorAll('ul:nth-of-type(8) li')) // Adjust selector to match skills section
                        .map((li) => li.textContent)
                        .join(', ');
                case 'education':
                    return Array.from(document.querySelectorAll('section:nth-of-type(2) ul li'))
                        .map((li) => li.textContent)
                        .join('\n');
                case 'contact':
                    return 'Email: https://www.linkedin.com/in/kelebohile-mokone/';
                default:
                    return null;
            }
        };
 
        const generateResponse = (userMessage) => {
            if (userMessage.toLowerCase().includes('soft skills')) {
                return getResumeInfo('Soft Skills') || "Sorry, I couldn't find the skills section.";
            } else if (userMessage.toLowerCase().includes('education')) {
                return getResumeInfo('Education') || "Sorry, I couldn't find the education section.";
            } else if (userMessage.toLowerCase().includes('contact')) {
                return getResumeInfo('contact') || "Sorry, I couldn't find the contact section.";
            } else if (userMessage.toLowerCase().includes('hello')) {
                return 'Hi there! How can I assist you today?';
            } else if (userMessage.toLowerCase().includes('how are you')) {
                return 'I am well, thank you! How may I help you?';
            } else if (userMessage.toLowerCase().includes('help')) {
                return 'Sure! What do you need help with?';
            } else {
                return 'I am here to assist. Can you provide more details?';
            }
        };
 
   
 
        sendButton.addEventListener('click', () => {
            const userMessage = chatMessage.value.trim();
            if (userMessage) {
                addMessage(userMessage, 'User'); // Add user's message
                chatMessage.value = ''; // Clear the input
 
                // Generate and add chatbot's response
                const botResponse = generateResponse(userMessage);
                setTimeout(() => {
                    addMessage(botResponse, 'Bot'); // Add bot's message
                }, 500); // Add a slight delay for realism
            }
        });
    } else {
        console.error('Send button, chat message input, or chat window not found');
    }
});
const chatbotContainer = document.getElementById("chatbot-container");
const closeButton = document.getElementById("close-btn");

// Close the chatbot
closeButton.addEventListener("click", () => {
  chatbotContainer.classList.add("hidden"); // Hide the chatbot
  // Optionally refresh the chatbot by clearing its contents
  const chatbotBody = document.getElementById("chatbot-body");
  chatbotBody.innerHTML = ""; // Clear messages or reload default content
});

// Optional: Reopen chatbot functionality (add a button to open it again)
const openButton = document.getElementById("open-btn"); // Assuming you have an open button
if (openButton) {
  openButton.addEventListener("click", () => {
    chatbotContainer.classList.remove("hidden");
  });
}