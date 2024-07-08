import React, { useState, useEffect } from 'react';
import './components_styles/Chatbot.css'; // Import your CSS file
import logo from '../assets/images/logo2.png';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState(''); // State for input value

    useEffect(() => {
        // Load conversation history from local storage or any other storage mechanism
        const savedConversations = JSON.parse(localStorage.getItem('conversations')) || [];
        setMessages(savedConversations);
    }, []);

    const handleUserMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = { text: inputValue.trim(), sender: 'user' };
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            localStorage.setItem('conversations', JSON.stringify(updatedMessages)); // Save to local storage
            setInputValue(''); // Clear input after sending message
            handleBotResponse(); // Example: Trigger bot response after user input
        }
    };

    const handleBotResponse = () => {
        // Example bot response logic (replace with your own)
        const botResponse = 'Hello! How can I assist you today?';
        const newMessage = { text: botResponse, sender: 'bot' };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        localStorage.setItem('conversations', JSON.stringify(updatedMessages)); // Save to local storage
    };

    return (
        <div className="chatbot-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="Tekrafiki Logo" className="sidebar-logo" />
                    <h3></h3>
                </div>
                <div className="conversation-list">
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>
                                <span className={message.sender}>{message.sender === 'user' ? 'You: ' : 'Bot: '}</span>
                                {message.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <div className="messages-container">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue} // Bind input value to state
                        onChange={(event) => setInputValue(event.target.value)} // Update input value state
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handleUserMessage(); // Call handleUserMessage on Enter key press
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
