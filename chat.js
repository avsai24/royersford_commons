document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    let hasOpened = false;

    // Helper: Get Current Time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }

    // Toggle Chat Window
    function toggleChat() {
        const isHidden = chatWindow.getAttribute('aria-hidden') === 'true';

        if (isHidden) {
            // Opening
            chatWindow.setAttribute('aria-hidden', 'false');
            chatWindow.classList.add('open');
            setTimeout(() => chatInput.focus(), 300);

            // Add welcome message if it's the first time opening
            if (!hasOpened && chatMessages.children.length === 0) {
                addMessage("Hello! Welcome to Royersford Commons. How can I help you regarding our new luxury apartments?", 'bot');
                hasOpened = true;
            }
        } else {
            // Closing
            chatWindow.setAttribute('aria-hidden', 'true');
            chatWindow.classList.remove('open');
        }
    }

    // Auto-open when scrolling to bottom
    function handleScroll() {
        if (!hasOpened) {
            const scrollPosition = window.innerHeight + window.scrollY;
            const bodyHeight = document.body.offsetHeight;

            // Trigger when within 100px of the bottom
            if (scrollPosition >= bodyHeight - 100) {
                toggleChat();
                hasOpened = true;
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    chatToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);

    // Handle Message Submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();

        if (message) {
            // Add User Message
            addMessage(message, 'user');
            chatInput.value = '';

            // Simulate Bot Response
            simulateBotResponse();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = text;

        const timeDiv = document.createElement('div');
        timeDiv.classList.add('message-time');
        timeDiv.textContent = getCurrentTime();

        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateBotResponse() {
        // Show typing indicator could go here

        setTimeout(() => {
            const responses = [
                "That's a great question! Our leasing team would love to discuss that with you in more detail. Would you like to schedule a tour?",
                "We have studios, 1-bedroom, and 2-bedroom units available starting November 1st.",
                "Yes, we are pet friendly! We welcome both cats and dogs.",
                "Our office is located at 624 Main Street, Royersford, PA.",
                "Please leave your contact details in the 'Contact' section, and we'll get back to you shortly!"
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'bot');
        }, 1000);
    }
});
