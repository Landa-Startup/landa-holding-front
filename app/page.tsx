import AerialViewBusinessTeam from '@/components/AerialViewBusinessTeam';
import ContactUs from '@/components/ContactUs';
import Hero from '@/components/Hero';
import HomeTextCardContainer from '@/components/HomeTextCardContainer';
import LandaHoldingPriority from '@/components/LandaHoldingPriority';
import LandaMagazine from '@/components/LandaMagazine';
import LatestStartps from '@/components/LatestStartps';
import PromotionalVideo from '@/components/PromotionalVideo';
import TextCard from '@/components/Textcard';
import UpcomingEvents from '@/components/UpcomingEvents';
import React from 'react';

export default function page() {
  return (
    <div>
      <Hero />
      <HomeTextCardContainer title='investment' text='At Landa Holding Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of $5 million or less. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.'/>
      <HomeTextCardContainer title='Acceleration' text='At Landa Holding Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts which helps individuals to accelerate their own business and expand their new creative startups. Landa Holding understands the challenges startups face. So, it offers comprehensive programs that address business development, and market expansion.'/>
      <HomeTextCardContainer title='Academy' text='At Landa Holding Academy, we provide a nurturing place for individuals to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and trough a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.'/>
      {/* The Black Container */}
      <PromotionalVideo />
      <UpcomingEvents/>
      <LandaHoldingPriority />
      <AerialViewBusinessTeam />
      <LatestStartps />
      <LandaMagazine />
      <ContactUs />
    </div>
  );
}
