import SeoCourses from '@/components/academy/SeoCourses';
import Hero from '@/components/templates/Hero';
import React from 'react';

export default function page() {
  return (
    <>
    <div className="bg-white">
      <Hero
        showLanda={false}
        title="SEO COURSE"
        subTitle="Upgrade yourself! SEO Strategies for Modern Businesses"
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage=""
      />
      <SeoCourses/>
    </div>
    </>
  );
}
