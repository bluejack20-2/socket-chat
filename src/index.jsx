import './styles.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Chat from './components/chat';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('http://127.0.0.1:3000');
    socket.on('chat message', msg => setMessages(prev => [...prev, msg]));

    setSocket(socket);
    setIsLoaded(true);

    return () => socket.disconnect();
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return <Chat messages={messages} socket={socket} />;
};

ReactDOM.render(<Index />, document.querySelector('main'));

module.hot.accept();
