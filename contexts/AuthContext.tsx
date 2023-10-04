// context/AuthContext.js

import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
};
const AuthContext = createContext<AuthContextType>({
  login: async (email: string, password: string) => { }
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<null | { email: string, password: string }>(null);

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const token = await response.json();
      // const decodedToken = jwtDecode(token);
      // const user_id = 
      const decodedToken: { user_id: number } = jwtDecode(token);


      // setUser(user);
    } else {
      throw new Error('Failed to login');
    }
  }

  const logout = async () => {
    // call api to logout
    // set user to null
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}