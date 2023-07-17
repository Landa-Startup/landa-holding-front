import React from 'react';
import Hero from '@/components/Hero';
import ContactUsForm from '@/components/ContactUs/ContactUsForm';
import ContactUsDescription from '@/components/ContactUs/ContactUsDescription';
export default function page() {
  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-3 my-20">
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
