import Banner from '@/components/molecules/Banner';
import StartupForm from '@/components/organisms/StartupForm';
import React from 'react';

export default function page() {
  return (
    <div>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="STARTUP VALIDATION"
      />
      <StartupForm />
    </div>
  );
}