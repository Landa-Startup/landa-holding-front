import jwtDecode from 'jwt-decode';

export async function login(email: string, password: string) {
    const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const { accessToken } = await response.json();
        // const decodedToken: { user_id: number } = jwtDecode(accessToken);
        const decodedToken = jwtDecode(accessToken);
        return decodedToken;

    } else {
        throw new Error('Failed to login');
    }
}