import React, { useState } from 'react';

const UsernameForm = ({ setUsername }) => {
  const [tempUsername, setTempUsername] = useState('');

  return (
    <section className="h-screen w-full flex items-center">
      <div className="shadow-lg rounded-lg  w-full p-16">
        <h1 className="text-xl">Username</h1>

        <input
          type="text"
          value={tempUsername}
          onChange={e => setTempUsername(e.target.value)}
          className="rounded border border-black w-full my-4 p-2"
          autoFocus
        />

        <button
          className="border hover:border-black bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded w-full"
          onClick={() => setUsername(tempUsername)}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default UsernameForm;
