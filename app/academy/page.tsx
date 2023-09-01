import ContactUs from '@/components/academy/ContactUs';
import Gallery from '@/components/academy/Gallery';
import PromoteCourse from '@/components/academy/PromoteCourse';
import RoadmapContainer from '@/components/academy/Roadmap/RoadmapContainer';
import Scroll from '@/components/academy/Scroll';
import Hero from '@/components/templates/Hero';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className="bg-[#F1F8EC]">
      <Hero
        showLanda={false}
        titles="SEO COURSE"
        subTitle="
Elevate your online impact with our SEO course at Landa Academy! Master search engine optimization, from keywords to cutting-edge strategies. Join us now and amplify your digital presence!"
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage="academy.png"
      />
      <RoadmapContainer />
      <PromoteCourse image='/static/images/Academy/Frame 37625.png'/>
      <Scroll />
      <Gallery />
      <ContactUs />
    </div>
  );
}
