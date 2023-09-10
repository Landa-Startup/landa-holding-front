import React from 'react';
import Hero from '@/components/templates/Hero';
import RoadmapContainer from '@/components/academy/Roadmap/RoadmapContainer';
import PromoteCourse from '@/components/academy/PromoteCourse';
import Gallery from '@/components/academy/Gallery';
import ContactUs from '@/components/academy/ContactUs';
import ScrollMenu from '@/components/academy/ScrollMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Academy',
  description: '',
};

export default function SeoCoursePage() {
  return (
    <div className="bg-[#F1F8EC]">
      {/* Hero Section */}
      <Hero
        showLanda={false}
        titles="SEO COURSE"
        subTitle="Elevate your online impact with our SEO course at Landa Academy! Master search engine optimization, from keywords to cutting-edge strategies. Join us now and amplify your digital presence!"
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage="academy.png"
      />

      {/* Roadmap Section */}
      <RoadmapContainer />

      {/* Promote Course Section */}
      <PromoteCourse image="/static/images/Academy/Frame 37625.png" />

      {/* Scroll Section */}
      <ScrollMenu />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
}
