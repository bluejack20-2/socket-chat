import React, { useEffect, useState } from 'react';
import ChatList from './chat-list';

const ChatRoom = ({ socket, username }) => {
  const [text, setText] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', msg => setMessages(prev => [...prev, JSON.parse(msg)]));
    socket.on('user join', msg => setMessages(prev => [...prev, { user: 'System', text: msg, timestamp: Date.now() }]));

    socket.emit('set username', username);
  }, []);

  const handleSend = () => {
    if (!socket || text === '') return;
    socket.emit('chat message', JSON.stringify({ user: username, text, timestamp: Date.now() }));
    setText('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-200 rounded relative">
        <ChatList messages={messages} username={username} />
      </div>

      <section className="w-full flex">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value.trim())}
          onKeyDown={handleKeyDown}
          className="border border-black rounded p-1 w-full"
          placeholder={`Chatting as ${username}...`}
          autoFocus
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

export default ChatRoom;
