import React from 'react';
import BusinessPartnerShipForm from '@/components/organisms/BusinessPartnerShipForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Business PartnerShip',
  description: '',
};

export default function BusinessPartnerShipPage() {
  return (
    <div className="mx-auto w-screen bg-white">
      {/* BusinessPartnerShipForm Component */}
      <BusinessPartnerShipForm />
    </div>
  );
}
