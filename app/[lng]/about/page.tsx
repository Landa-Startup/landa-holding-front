import React from 'react';
import AboutUsLandaHolding from '@/components/about/AboutUsLandaHolding';
import AboutUsProfile from '@/components/about/AboutUsProfile';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfLanda from '@/components/about/StoryOfLanda';
import KeyDifferentiating from '@/components/KeyDifferentiating';
import { cards } from '../../[lng]/statics';

export const metadata: Metadata = {
  title: 'Landa Holding | About',
  description:
    'Learn about Landa Holding, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default function Page() {
  return (
    <div>
      <Banner title="About Us" image="/static/images/a52.jpeg" />
      <AboutUsLandaHolding />
      <SubsidiaryCompanies />
      <StoryOfLanda />
      {/* <AboutUsCooperation /> */}
      {/* <div className="bg-whiteGold md:my-20 md:mx-12">
        {cards.map((card, index) => (
          <AboutUsCard
            reverse={card.reverse}
            key={index}
            text={card.text}
            title={card.title}
            image={card.image}
            description={''}
            link={card.link}
          />
        ))}
      </div> */}
      <KeyDifferentiating />
      <AboutUsProfile />
    </div>
  );
}
