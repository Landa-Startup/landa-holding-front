import React from 'react';
import Banner from '@/components/molecules/Banner';
import StartupFormForm from '@/components/organisms/StartupFormForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Startups',
  description: '',
};

export default function StartupValidationPage() {
  return (
    <>
      {/* Banner component with an image and title */}
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="STARTUP VALIDATION"
      />

      {/* Render the StartupFormForm component */}
      <StartupFormForm />
    </>
  );
}
