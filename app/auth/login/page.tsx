import { setTokenCookie } from '../utils/auth';

export default function Login() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    // submit login form
    
    const token = await loginUser(formData);

    setTokenCookie(token, req);

    router.push('/dashboard');

  }

  return (
    <form onSubmit={handleSubmit}>
      {/* login form */} 
    </form>
  )

}