// pages/login.js
"use client"
import { useState, useContext, FormEvent } from 'react';
// import AuthContext from '@/contexts/AuthContext';
import { login } from '../../../serveices/authService';
export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log("adsf")
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>

  )

}