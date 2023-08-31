import React from 'react';
import ContactUsForm from '@/components/organisms/ContactUsForm';
import ContactUsDescription from '@/components/molecules/ContactUsDescription';
import Banner from '@/components/molecules/Banner';
export default function page() {
  return (
    <div>
      {/* TODO: add props for this component */}
      <Banner
        image="/static/images/Contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title="Contact Us"
      />
      <div className="container grid grid-cols-1 gap-6 px-3 mx-auto py-5 md:grid-cols-2 bg-[#FAFAFA] text-black">
        <ContactUsDescription />
        <ContactUsForm />
      </div>
    </div>
  );
}
