import React from 'react';
import Banner from '@/components/common/Banner';
import JobForm from '@/components/job-form/JobForm';
import { Metadata } from 'next';

import { useTranslation } from '../../i18n'

export const metadata: Metadata = {
  title: 'Landa Holding | Jobs',
  description:
    'Explore the Landa Holding Apply Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.',
};

export default async function ApplyFormPage({ params: { lng } } : { params: { lng: string } }) {

  const { t } = await useTranslation(lng, "");

  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={`${t("APPLY JOB")}`}
      />
      <JobForm />
    </>
  );
}
