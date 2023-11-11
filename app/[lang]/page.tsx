import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import LandaHoldingPriority from '@/components/home/LandaHoldingPriority';
import LatestStartups from '@/components/home/LatestStartups';
import LandaHoldingBlack from '@/components/home/LandaHoldingBlack';
import HomeCardsContainer from '@/components/home/HomeCardsContainer';
import Partners from '@/components/home/Partners';
import HomeOurTeam from '@/components/home/HomeOurTeam';

import { useTranslation } from '../i18n';

export const metadata: Metadata = {
  title: 'Landa Holding',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <div className="relative">
      {/* Hero section */}
      <Hero
        showLanda
        titles={[t('Acceleration'), t('Investment'), t('Academy')]}
        subTitle={t('Feel The Future')}
        backgroundImage="Hero.png"
        leftImage="Landa.svg"
        showButton={false}
      />

      {/* Include other components */}
      <HomeCardsContainer />
      <LandaHoldingBlack />
      <LandaHoldingPriority />
      <HomeOurTeam />
      <LatestStartups />
      <Partners />
    </div>
  );
}
