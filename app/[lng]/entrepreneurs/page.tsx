import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import EntrepreneursForm from '@/components/entrepreneurs/EntrepreneursForm';

import React from 'react';

import { useTranslation } from '../../i18n'

export const metadata: Metadata = {
  title: 'Landa Holding | Entrepreneurs',
  description:
    'Explore the Landa Holding Entrepreneurs Form and connect with us to share your entrepreneurial ideas and projects. We are interested in hearing from creative minds and visionaries. Lets collaborate to turn your entrepreneurial dreams into reality.',
};

export default async function EntrepreneursPage({ params: { lng } } : { params: { lng: string } }) {

  const { t } = await useTranslation(lng, "");

  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={`${t("ENTREPRENEUR CENTER")}`}
      />
      <EntrepreneursForm />
    </>
  );
}
