import jwtDecode from 'jwt-decode';
import { setCookie } from 'nookies';

export async function login(email: string, password: string) {
    const response = await fetch('http://localhost:8000/accounts/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const { access } = await response.json();
        const decodedToken = jwtDecode(access);
        if (decodedToken) {
            setCookie(null, 'currentUser', JSON.stringify(decodedToken), {
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: '/',
            });
        }
        return decodedToken;

    } else {
        throw new Error('Failed to login');
    }
}