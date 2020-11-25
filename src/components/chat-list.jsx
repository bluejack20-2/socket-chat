import React from 'react';
import ChatRow from './chat-row';

const ChatList = ({ messages, username }) => (
  <div className="flex flex-col absolute bottom-0 w-full">
    {messages.map((msg, idx) => (
      <ChatRow key={idx} username={username}>
        {msg}
      </ChatRow>
    ))}
  </div>
);

export default ChatList;
