// Chat.jsx
import React from 'react';

// Dummy data
const messages = [
  { id: 1, text: "Hey there!", sender: "receiver" },
  { id: 2, text: "Hello! How are you?", sender: "sender" },
  { id: 3, text: "I'm good, thanks! How about you?", sender: "receiver" },
  { id: 4, text: "I'm doing well too, thanks for asking.", sender: "sender" },
];

// Sender component
const SenderMessage = ({ text }) => (
  <div className="flex justify-end mb-2">
    <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
      {text}
    </div>
  </div>
);

// Receiver component
const ReceiverMessage = ({ text }) => (
  <div className="flex justify-start mb-2">
    <div className="bg-gray-300 p-3 rounded-lg max-w-xs">
      {text}
    </div>
  </div>
);

// Chat component
const Chat = () => (
  <div className="flex flex-col h-screen p-4 bg-gray-100">
    <div className="flex-1 overflow-auto">
      {messages.map((message) =>
        message.sender === "sender" ? (
          <SenderMessage key={message.id} text={message.text} />
        ) : (
          <ReceiverMessage key={message.id} text={message.text} />
        )
      )}
    </div>
    <div className="flex items-center p-2 bg-white border-t border-gray-300">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-2 border rounded-lg mr-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
    </div>
  </div>
);

export default Chat;
