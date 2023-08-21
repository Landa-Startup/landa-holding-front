import React from 'react';
import Card from './Card';

export default function Scroll() {
  return (
    <div className="flex flex-col items-center bg-[#3D5656] py-10">
      <div className="md:w-[413px] md:h-[58px] text-center text-white text-2xl md:text-[32px] font-normal leading-[50px] tracking-[11.20px]">
        LANDA ACADEMY
      </div>
      <div className="md:w-[413px] md:h-[58px] text-center text-white text-5xl md:text-[64px] font-normal leading-[50px] tracking-[3.20px] mb-12">
        Our Courses
      </div>
      <div className="flex overflow-x-scroll justify-start gap-14 md:w-full">
        <Card title="Digital marketing" />
        <Card title="AI webinar" />
        <Card active title="SEO course" />
        <Card title="Python course" />
        <Card title="UX Workshop" />
        <Card title="Icdl workshop" />
        <Card title="Digital marketing" />
        <Card title="Digital marketing" />
      </div>
    </div>
  );
}
