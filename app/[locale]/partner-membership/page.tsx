import Banner from '@/components/molecules/Banner'
// import Banner from '@/components/Banner'
import PartnerMembershipForm from '@/components/organisms/PartnerMembershipForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | پارتنرها',
  description: '',
};

export default function page() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="AFFILIATE FORM"
      />
      <PartnerMembershipForm />
    </>
  )
}
