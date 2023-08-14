import AerialViewBusinessTeam from '@/components/templates/BusinessTeam';
import ContactUs from '@/components/templates/ContactUs';
import Hero from '@/components/templates/Hero';
import HomeTextCardContainer from '@/components/molecules/HomeTextCardContainer';
import LandaHoldingPriority from '@/components/templates/LandaHoldingPriority';
import LandaMagazine from '@/components/templates/LandaMagazine';
import LatestStartups from '@/components/templates/LatestStartups';
import PromotionalVideo from '@/components/templates/PromotionalVideo';
import UpcomingEvents from '@/components/templates/UpcomingEvents';
import React from 'react';
import { Metadata } from 'next';
import LandaHoldingBlack from '@/components/templates/LandaHoldingBlack';

export const metadata: Metadata = {
  title: 'Landa Holding',
  description: 'Page Desc',
};

const cardData = [
  {
    title: 'investment',
    text: 'At Landa Holding Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of $5 million or less. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.',
    reverse: false,
    show: true,
  },
  {
    title: 'Acceleration',
    text: 'At Landa Holding Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts which helps individuals to accelerate their own business and expand their new creative startups. Landa Holding understands the challenges startups face. So, it offers comprehensive programs that address business development, and market expansion.',
    reverse: true,
    show: true,
  },
  {
    title: 'Academy',
    text: 'At Landa Holding Academy, we provide a nurturing place for individuals to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and trough a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.',
    reverse: false,
    show: false,
  },
];

export default function page() {
  return (
    <div className="relative">
      <Hero />
      {cardData.map((data, index) => (
        <HomeTextCardContainer
          key={index}
          title={data.title}
          text={data.text}
          reverse={data.reverse}
          show={data.show}
        />
      ))}
      <LandaHoldingBlack />
      <PromotionalVideo />
      <UpcomingEvents />
      <LandaHoldingPriority />
      <AerialViewBusinessTeam />
      <LatestStartups />
      {/* <LandaMagazine /> */}
      {/* <ContactUs /> */}
    </div>
  );
}
