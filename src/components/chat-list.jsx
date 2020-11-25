import React from 'react';
import ChatRow from './chat-row';

const ChatList = ({ messages }) => (
  <div class="flex flex-col absolute bottom-0">
    {messages.map((msg, idx) => (
      <ChatRow key={idx}>{msg}</ChatRow>
    ))}
  </div>
);

export default ChatList;
