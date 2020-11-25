import './styles.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import ChatRoom from './components/chat-room';
import UsernameForm from './components/username-form';
import Loading from './components/loading';

const Index = () => {
  const [username, setUsername] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('http://127.0.0.1:3000');

    setSocket(socket);
    setIsLoaded(true);

    return () => socket.disconnect();
  }, []);

  if (!isLoaded) return <Loading />;
  if (!username) return <UsernameForm setUsername={setUsername} />;
  return <ChatRoom socket={socket} username={username} />;
};

ReactDOM.render(<Index />, document.querySelector('main'));

module.hot.accept();
