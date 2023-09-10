import BusinessPartnerShipForm from '@/components/organisms/BusinessPartnerShipForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | شرکای تجاری',
  description: '',
};

export default function page() {
  return (
    <div className="mx-auto w-screen bg-white">
      <div>
        <BusinessPartnerShipForm />
      </div>
    </div>
  );
}
