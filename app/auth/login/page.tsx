// pages/login.js
"use client"
import LoginForm from '@/components/organisms/LoginForm'
import Banner from '@/components/molecules/Banner';

export default function LoginPage() {

  return (
    <div>
      <Banner
        image="/static/images/Contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title="Contact Us"
      />
      <LoginForm />
    </div>
  )
}