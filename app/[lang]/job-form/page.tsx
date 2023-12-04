import React from 'react';
import Banner from '../../../components/common/Banner';
import JobForm from '../../../components/job-form/JobForm';
import { Metadata } from 'next';
import { SubmitProvider } from '../../../providers/StateProvider';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Jobs',
  description:
    'Explore the Landa Holding Apply Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.',
};

export default async function ApplyFormPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "jobForm")

  return (
    <div dir={t('dir')}>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('banner')}
        lang={lang}

      />
      <SubmitProvider>
        <JobForm lang={lang} />
      </SubmitProvider>
    </div>
  );
}
