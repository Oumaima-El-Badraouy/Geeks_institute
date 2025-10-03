import React, { useState } from 'react';

export default function Forms() {
  const [username, setUsername] = useState('');
  const [header, setHeader] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setHeader(username);
  }

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input 
          type="text" 
          required 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Save</button>
      </form>
      <h3>This is a header: {header}</h3>
    </div>
  );
}
