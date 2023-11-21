import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch chats from your API
    // Replace 'telegram' with your actual API endpoint
    axios.get('telegram/chats')
      .then((response) => setChats(response.data))
      .catch((error) => console.error('Error fetching chats:', error));
  }, []);

  const handleSelectChat = (chatId) => {
    // Fetch messages for the selected chat
    axios.get(`telegram/chats/${chatId}/messages`)
      .then((response) => {
        setSelectedChat(chats.find((chat) => chat.id === chatId));
        setMessages(response.data);
      })
      .catch((error) => console.error('Error fetching messages:', error));
  };

  const handleSendMessage = (text) => {
    // Simulate sending a message to the server (for testing purposes)
    const newMessage = {
      id: messages.length + 1,
      sender: 'You', // Assuming the sender is the current user
      text: text,
    };

    setMessages([...messages, newMessage]);
  };


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ChatList chats={chats} onSelectChat={handleSelectChat} />
                {selectedChat && (
                  <ChatWindow selectedChat={selectedChat} messages={messages} onSendMessage={handleSendMessage} />
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
