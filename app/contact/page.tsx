import React from 'react';
import Hero from '@/components/Hero';
import ContactUsForm from '@/components/contact-us/ContactUsForm';
import ContactUsDescription from '@/components/contact-us/ContactUsDescription';
import Banner from '@/components/Banner';
export default function page() {
  return (
    <div>
      {/* TODO: add props for this component */}
      <Banner
        image="/static/images/contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title="Contact Us"
      />
      <div className="container grid grid-cols-1 gap-5 px-3 mx-auto my-20 md:grid-cols-2">
        <ContactUsDescription />
        <ContactUsForm />
      </div>
    </div>
  );
}
