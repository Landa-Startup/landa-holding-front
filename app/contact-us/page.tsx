import React from 'react';
import Hero from '@/components/Hero';
import ContactUsForm from '@/components/contact-us/ContactUsForm';
import ContactUsDescription from '@/components/contact-us/ContactUsDescription';
export default function page() {
  return (
    <div>
      <Hero></Hero>
      <div className="container grid grid-cols-1 gap-5 px-3 mx-auto my-20 md:grid-cols-2">
        <div>
          <ContactUsDescription/>
        </div>
        <div>
          <ContactUsForm/>
        </div>
      </div>
    </div>
  );
}
