'use client';
import React, { useState } from 'react';
import Input from '../../common/form/Input';
import Button from '@/components/common/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform authentication logic here, e.g., send a POST request to your server.
    // Check user roles and redirect accordingly.
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Log In" type='button' size={''} bgColor="Primary" goto={"handleLogin"}/>
      {/* <button onClick={handleLogin}>Log In</button> */}
    </div>
  );
}
