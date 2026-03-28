'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/profile', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('? Not authorized'));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>{message}</p>
    </div>
  );
}
