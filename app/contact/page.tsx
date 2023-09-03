import React from 'react';
import ContactUsForm from '@/components/organisms/ContactUsForm';
import ContactUsDescription from '@/components/molecules/ContactUsDescription';
import Banner from '@/components/molecules/Banner';

export default function ContactUsPage() {
  // Renamed the component for better naming
  return (
    <div>
      {/* Banner Component */}
      <Banner
        image="/static/images/Contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title="Contact Us"
      />

      {/* Main Content Grid */}
      <div className="container grid grid-cols-1 gap-6 mx-auto px-28 py-32 md:grid-cols-2 bg-[#FAFAFA] text-black">
        {/* ContactUsDescription Component */}
        <ContactUsDescription />

        {/* ContactUsForm Component */}
        <ContactUsForm />
      </div>
    </div>
  );
}
