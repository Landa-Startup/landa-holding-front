import React from 'react';
import Hero from '@/components/molecules/Hero';
import ContactUsForm from '@/components/organisms/ContactUsForm';
import ContactUsDescription from '@/components/molecules/ContactUsDescription';
import Banner from '@/components/molecules/Banner';
export default function page() {
  return (
    <div>
      {/* TODO: add props for this component */}
      <Banner
        image="/static/images/37b76f28c1c41b4ea18163cf2fba85ab.jpg"
        title="Contact Us"
      />
      <div className="container grid grid-cols-1 gap-5 px-3 mx-auto my-20 md:grid-cols-2">
        <ContactUsDescription />
        <ContactUsForm />
      </div>
    </div>
  );
}
