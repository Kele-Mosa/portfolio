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
            chatWindow.innerHTML = '';
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
 
 const portfolioChatbot = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

//     if (lowerCaseMessage.includes('projects')) {
//         return `Here are some of my recent projects:\n
// 1. **Personal Finance Tracker (2023):**  
//    - A web app to help users manage budgets and track expenses.  
//    - Technologies: React, Node.js, MongoDB.  
//    - Check it out [here](#).\n
// 2. **AI-Powered Resume Builder (2022):**  
//    - Built an AI-based tool to generate tailored resumes.  
//    - Technologies: Python, Flask, OpenAI API.  
//    - See it live [here](#).\n
// Would you like more details about a specific project?`;
//     }

    if (lowerCaseMessage.includes('skills')) {
        return `Here are my key skills:\n
- **Programming Languages:** JavaScript, Python, C#\n
- **Web Development:** HTML, CSS, React, Node.js\n
- **Data Analysis:** SQL, Java, SAS\n
- **Version Control:** Git, GitHub\n
- **Soft Skills:** Communication, Problem-Solving, Teamwork\n
Would you like to know how I’ve applied these skills in my projects?`;
    }

    if (lowerCaseMessage.includes('achievements')) {
        return `I’m proud of these achievements:\n
1. **Dean’s List (2015-2020):** Maintained a GPA of 3.9 throughout my studies.\n
2. **Certification:** Completed CCNA Cisco Certificate.\n
Want to hear more about one of these?`;
    }

    if (lowerCaseMessage.includes('contact')) {
        return `You can reach out to me through:\n
- **Email:** kelebohilemokone@gmail.com\n
- **LinkedIn:** [https://www.linkedin.com/in/kelebohile-mokone/](#)\n
- **GitHub:** [https://github.com/Kele-Mosa](#)\n
Feel free to connect with me for collaborations or questions!`;
    }

    if (lowerCaseMessage.includes('education')) {
        return `Here’s a summary of my education:\n
- **National Diploma in Information Technology: Software Development**  
  - **Institution:** Central University of Technology  
  - **Graduation Date:** March 2020  
  - **GPA:** 3.9/4.0  
  - Relevant Courses: Data Structures, Machine Learning, Software Development
  
  - **Advanced Diploma in Applied Management**  
  - **Institution:** Central University of Technology  
  - **Graduation Date:** March 2021  
  - **GPA:** 3.9/4.0  \n
Would you like to know about my certifications or extracurricular activities?`;
    }

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return `Hello! 👋 Kele here, Welcome to my portfolio. How can I assist you today?\n
You can ask about:\n
- My **skills**\n
- My **achievements**\n
- How to **contact** me`;
    }

    if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
        return "You’re welcome! 😊 Feel free to explore more of my portfolio, and don’t hesitate to ask if you need anything else. Have a great day! 🌟";
    }

    if (lowerCaseMessage.includes('help')) {
        return `I’m here to help! You can ask me about:\n
- My **skills**\n
- My **achievements**\n
- My **education**\n
- How to **contact** me`;
    }

    return "I'm here to assist! Could you tell me more about what you're looking for? For example, you can ask about my skills, achievements, or contact details.";
};

// Example usage:
const userMessage = "Can you tell me about your experience?";
console.log(portfolioChatbot(userMessage));
 
   
 
        sendButton.addEventListener('click', () => {
            const userMessage = chatMessage.value.trim();
            if (userMessage) {
                addMessage(userMessage, 'User'); // Add user's message
                chatMessage.value = ''; // Clear the input
 
                // Generate and add chatbot's response
                const botResponse = portfolioChatbot(userMessage);
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