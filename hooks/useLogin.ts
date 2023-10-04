import authService from '../services/authService'
import Cookies from 'js-cookie'

export const useLogin = () => {
    const login = async (email: string, password: string) => {
        const user = await authService().login(email, password)
        if (user) {
            Cookies.set('user', JSON.stringify(user))
        }
    }
    return { login }
}