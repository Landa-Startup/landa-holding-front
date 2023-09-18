import React from 'react';
import Banner from '@/components/molecules/Banner';
import PartnerMembershipForm from '@/components/organisms/PartnerMembershipForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Partners',
  description:
    'Explore the Landa Holding Business Partner Form and discover opportunities for collaboration and partnership. Join us in shaping the future of business together.',
};

export default function AffiliateFormPage() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="BUSINESS PARTNER FORM"
      />
      <PartnerMembershipForm />
    </>
  );
}
