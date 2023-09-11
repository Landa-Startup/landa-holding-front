// import LoginPage from '@/components/organisms/LoginPage';

import Login from '@/components/templates/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | ورود',
  description: '',
};

function page() {
  return <Login />;
}

export default page;
