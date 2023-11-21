import React, { useState } from 'react';

const ChatWindow = ({ selectedChat, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="chat-window">
      <h2>{selectedChat.name}</h2>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.sender}</strong>: {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
