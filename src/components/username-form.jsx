import React, { useState } from 'react';

const UsernameForm = ({ setUsername, setHost }) => {
  const [tempUsername, setTempUsername] = useState('');
  const [tempHost, setTempHost] = useState('');

  const handleSubmit = () => {
    setUsername(tempUsername)
    setHost(tempHost)
  }

  return (
    <section className="h-screen w-full flex items-center">
      <div className="shadow-lg rounded-lg  w-full p-16">
        <h2 className="text-xl">Username</h2>

        <input
          type="text"
          value={tempUsername}
          onChange={e => setTempUsername(e.target.value)}
          className="rounded border border-black w-full my-4 p-2"
          autoFocus
        />

        <h2 className="text-xl">Host</h2>

        <input
          type="text"
          value={tempHost}
          onChange={e => setTempHost(e.target.value)}
          className="rounded border border-black w-full my-4 p-2"
        />

        <button
          className="border hover:border-black bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default UsernameForm;
