import React, { useState } from 'react';
import ChatList from './chat-list';

const Chat = ({ socket, messages }) => {
  const [text, setText] = useState([]);

  const handleSend = () => {
    if (!socket || text === '') return;
    socket.emit('chat message', text);
    setText('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-200 rounded relative">
        <ChatList messages={messages} />
      </div>

      <section className="w-full flex">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-black rounded p-1 w-full"
        />

        <button
          onClick={handleSend}
          className="bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded border hover:border-black"
        >
          Send
        </button>
      </section>
    </section>
  );
};

export default Chat;
