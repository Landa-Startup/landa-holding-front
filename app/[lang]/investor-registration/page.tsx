import React from 'react';
import Banner from '@/components/common/Banner';
import InvestorRegistrationForm from '@/components/investor-registration/InvestorRegistrationForm';
import { Metadata } from 'next';

import { useTranslation } from '../../i18n'

export const metadata: Metadata = {
  title: 'Landa Holding | Investors',
  description:
    'Explore the Landa Holding Investor Center, your gateway to comprehensive financial information, reports, and updates. Stay informed about our financial performance and investment opportunities.',
};

export default async function InvestorRegistrationPage({ params: { lng } } : { params: { lng: string } }) {

  const { t } = await useTranslation(lng, "");

  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={`${t("INVESTOR CENTER")}`}
      />
      <InvestorRegistrationForm />
    </>
  );
}
