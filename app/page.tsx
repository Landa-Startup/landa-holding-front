import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/templates/Hero';
import LandaHoldingPriority from '@/components/templates/LandaHoldingPriority';
import LatestStartups from '@/components/templates/LatestStartups';
import ContactUs from '@/components/templates/ContactUs';
import LandaHoldingBlack from '@/components/templates/LandaHoldingBlack';
import AerialViewBusinessTeam from '@/components/templates/BusinessTeam';
import HomeCardsContainer from '@/components/templates/HomeCardsContainer';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding',
  description: 'Page Desc',
};

export default function Page() {
  return (
    <div className="relative">
      {/* Hero section */}
      <Hero
        showLanda
        titles={['Acceleration', 'Investment', 'Academy']}
        subTitle="Feel The Future"
        backgroundImage="cc89e64c10ecac569aaf36a80d6403f3.jpg"
        leftImage="Landa.svg"
        showButton={false}
      />

      {/* Include other components */}
      <HomeCardsContainer />
      <LandaHoldingBlack />
      <LandaHoldingPriority />
      <AerialViewBusinessTeam />
      <LatestStartups />
      <ContactUs />
    </div>
  );
}
