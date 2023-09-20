import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/templates/Hero';
import LandaHoldingPriority from '@/components/templates/LandaHoldingPriority';
import LatestStartups from '@/components/templates/LatestStartups';
import LandaHoldingBlack from '@/components/templates/LandaHoldingBlack';
import AerialViewBusinessTeam from '@/components/templates/BusinessTeam';
import HomeCardsContainer from '@/components/templates/HomeCardsContainer';
import Partners from '@/components/templates/Partners';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function Page() {
  return (
    <div className="relative">
      {/* Hero section */}
      <Hero
        showLanda
        titles={['Acceleration', 'Investment', 'Academy']}
        subTitle="Feel The Future"
        backgroundImage="Hero.png"
        leftImage="Landa.svg"
        showButton={false}
      />

      {/* Map over cardData to create HomeTextCardContainers */}
      {/* {cardData.map((data, index) => (
        <HomeTextCardContainer
          key={index}
          title={data.title}
          text={data.text}
          reverse={data.reverse}
          show={data.show}
          index={data.index}
          link={data.link}
          images={data.images}
        />
      ))} */}

      {/* Include other components */}
      { <LandaHoldingBlack /> }
      <LandaHoldingPriority />
      <AerialViewBusinessTeam />
      <LatestStartups />
      <Partners />
    </div>
  );
}
