import Banner from '@/components/molecules/Banner';
import StartupFormForm from '@/components/organisms/StartupFormForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | استارت آپ ها',
  description: '',
};

export default function page() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="STARTUP VALIDATION"
      />
      <StartupFormForm />
    </>
  );
}
