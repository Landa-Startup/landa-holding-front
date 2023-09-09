import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/templates/Hero';
import HomeTextCardContainer from '@/components/molecules/HomeTextCardContainer';
import LandaHoldingPriority from '@/components/templates/LandaHoldingPriority';
import LatestStartups from '@/components/templates/LatestStartups';
import ContactUs from '@/components/templates/ContactUs';
import LandaHoldingBlack from '@/components/templates/LandaHoldingBlack';
import AerialViewBusinessTeam from '@/components/templates/BusinessTeam';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding',
  description: 'Page Desc',
};

// Define data for the text card containers
const cardData = [
  {
    title: 'investment',
    text: 'At Landa Holding Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of $5 million or less. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.',
    reverse: false,
    show: true,
    index: 1,
    link: '/investment-registration',
    images: [
      {
        src: '/static/images/Home/Investment/male-female-business-people-working-tablet-office.png',
        alt: 'Landa Investment',
      },
      {
        src: '/static/images/Home/Investment/Rectangle 1412.png',
        alt: 'Landa Investment',
      },
    ],
  },
  {
    title: 'Acceleration',
    text: 'At Landa Holding Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts which helps individuals to accelerate their own business and expand their new creative startups. Landa Holding understands the challenges startups face. So, it offers comprehensive programs that address business development, and market expansion.',
    reverse: true,
    show: true,
    index: 2,
    link: '/startupsForm',
    images: [
      {
        src: '/static/images/Home/Acceleration/1.png',
        alt: 'Landa Holding Acceleration Center',
      },
      {
        src: '/static/images/Home/Acceleration/2.png',
        alt: 'Landa Holding Acceleration Center',
      },
    ],
  },
  {
    title: 'Academy',
    text: 'At Landa Holding Academy, we provide a nurturing place for individuals to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and through a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.',
    reverse: false,
    show: false,
    index: 3,
    link: '/academy',
    images: [
      {
        src: '/static/images/Home/Academy/3390782c4ef216a1fb0b67f2cc41660d 1.png',
        alt: 'Landa Holding Academy',
      },
      {
        src: '/static/images/Home/Academy/group-people-working-out-business-plan-office 1.png',
        alt: 'Landa Holding Academy',
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="relative">
      {/* Hero section */}
      <Hero
        showLanda
        titles={['Acceleration', 'Investment', 'Academy']}
        subTitle="Feel The Future"
        backgroundImage="businessman.png"
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
      { <AerialViewBusinessTeam/> }
      { <LatestStartups /> }
      <ContactUs />
    </div>
  );
}
