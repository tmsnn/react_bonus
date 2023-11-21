import React from 'react';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
