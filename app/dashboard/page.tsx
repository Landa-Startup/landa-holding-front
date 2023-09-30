
import { getTokenFromCookie, decodeToken } from '@/utils/auth';

async function getData(req) {

    const token = await getTokenFromCookie(req);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const decoded = decodeToken(token);
    const role = decoded.role;

    if (role !== 'admin') {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            token
        }
    }

}

export default async function Dashboard({ token }) {

    // show admin dashboard UI
    const data = await getData()

    return <div>Admin Dashboard</div>

}