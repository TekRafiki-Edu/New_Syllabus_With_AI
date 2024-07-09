import React, { useState, useEffect } from 'react';
import './components_styles/Chatbot.css'; // Import your CSS file
import logo from '../assets/images/logo2.png';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedConversation, setSelectedConversation] = useState(null);

    useEffect(() => {
        const savedConversations = JSON.parse(localStorage.getItem('conversations')) || [];
        setMessages(savedConversations);
    }, []);

    const handleUserMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = { text: inputValue.trim(), sender: 'user' };
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            localStorage.setItem('conversations', JSON.stringify(updatedMessages));
            setInputValue('');
            setTimeout(() => handleBotResponse(), 500);
        }
    };

    const handleBotResponse = () => {
        const botResponse = 'Hello! How can I assist you today?';
        const newMessage = { text: botResponse, sender: 'bot' };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        localStorage.setItem('conversations', JSON.stringify(updatedMessages));
    };

    const handleDeleteConversation = (index) => {
        const updatedMessages = messages.filter((_, i) => i !== index);
        setMessages(updatedMessages);
        localStorage.setItem('conversations', JSON.stringify(updatedMessages));
        setSelectedConversation(null); // Close options menu after deletion
    };

    const handleShareConversation = (index) => {
        // Implement share functionality
        alert('Share functionality not implemented yet');
        setSelectedConversation(null); // Close options menu after action
    };

    const handleArchiveConversation = (index) => {
        // Implement archive functionality
        alert('Archive functionality not implemented yet');
        setSelectedConversation(null); // Close options menu after action
    };

    const handleOptionsClick = (index) => {
        setSelectedConversation(index === selectedConversation ? null : index); // Toggle options menu
    };

    return (
        <div className="chatbot-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="Tekrafiki Logo" className="sidebar-logo" />
                </div>
                <div className="conversation-list">
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>
                                {message.text}
                                <div className="options-container">
                                    <button className="options-button" onClick={() => handleOptionsClick(index)}>...</button>
                                    {selectedConversation === index && (
                                        <div className="options-menu">
                                            <button onClick={() => handleDeleteConversation(index)}>Delete</button>
                                            <button onClick={() => handleShareConversation(index)}>Share</button>
                                            <button onClick={() => handleArchiveConversation(index)}>Archive</button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <div className="messages-container">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            <div className="message-bubble">
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handleUserMessage();
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
