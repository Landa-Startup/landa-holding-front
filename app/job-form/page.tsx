import React from 'react';
import Banner from '@/components/molecules/Banner';
import JobForm from '@/components/organisms/JobForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Jobs',
  description: '',
};

export default function ApplyFormPage() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="APPLY JOB"
      />
      <JobForm />
    </>
  );
}
