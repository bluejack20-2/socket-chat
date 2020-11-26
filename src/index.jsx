import './styles.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import ChatRoom from './components/chat-room';
import UsernameForm from './components/username-form';
import Loading from './components/loading';

const Index = () => {
  const [username, setUsername] = useState('');
  const [host, setHost] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log(host)
    const socket = io(`http://${host}:3000`);

    setSocket(socket);
    setIsLoaded(true);

    return () => socket.disconnect();
  }, [host]);

  if (!isLoaded) return <Loading />;
  if (!username || !host) return <UsernameForm setUsername={setUsername} setHost={setHost} />;
  return <ChatRoom socket={socket} username={username} />;
};

ReactDOM.render(<Index />, document.querySelector('main'));

module.hot.accept();
