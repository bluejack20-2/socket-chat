import React from 'react';

const ChatRow = ({ children, username }) => {
  const isSelf = children.user === username;

  return (
    <div className={'rounded p-4 m-4 ' + (isSelf ? 'bg-green-500' : 'bg-white')}>
      <p className="text-xl font-bold">{children.user}</p>
      <p className="text-lg">{children.text}</p>
      <p className={'text-xs ' + (isSelf ? 'text-gray-700' : 'text-gray-600')}>
        {new Date(children.timestamp).toLocaleString()}
      </p>
    </div>
  );
};

export default ChatRow;
