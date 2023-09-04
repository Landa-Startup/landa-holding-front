import React from 'react';
import Banner from '@/components/molecules/Banner';
import InvestorRegistrationForm from '@/components/organisms/InvestorRegistrationForm';

export default function InvestorRegistrationPage() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="Investor Registration"
      />
      <InvestorRegistrationForm />
    </>
  );
}
