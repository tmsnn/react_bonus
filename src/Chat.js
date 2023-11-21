// Chat.js
import React, { useState } from 'react';

const Chat = ({ match }) => {
  const chatId = match.params.chatId;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Send the newMessage to the server and update the messages state
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat Room {chatId}</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{`${message.sender}: ${message.text}`}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default Chat;