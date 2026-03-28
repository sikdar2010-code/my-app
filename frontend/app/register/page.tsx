'use client';

import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage('? Registered successfully');
      } else {
        setMessage('? ' + data.message);
      }
    } catch {
      setMessage('? Server error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br /><br />

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br /><br />

      <button onClick={handleRegister}>Register</button>

      <p>{message}</p>
    </div>
  );
}
