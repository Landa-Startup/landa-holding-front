import SeoCourses from '@/components/academy/SeoCourses';
import Hero from '@/components/templates/Hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | دوره سئو',
  description: '',
};

export default function page() {
  return (
    <>
      <div className="bg-white">
        <Hero
          showLanda={false}
          titles="SEO COURSE"
          subTitle="Upgrade yourself! SEO Strategies for Modern Businesses"
          buttonBg="#FDD30A"
          backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
          leftImage=""
        />
        <SeoCourses />
      </div>
    </>
  );
}
