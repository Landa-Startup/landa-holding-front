import React from 'react';
import Card from './Card';

export default function Scroll() {
  return (
    <div className="bg-[#3D5656] py-10">
      <div className="container mx-auto">
        <div className="text-center text-white text-2xl md:text-3xl font-normal leading-[50px] tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="text-center text-white text-4xl md:text-5xl font-normal leading-[50px] tracking-[3.20px] mb-12">
          Our Courses
        </div>
        <div className="flex overflow-x-scroll md:overflow-x-scroll whitespace-nowrap mx-5 gap-12">
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
    </div>
  );
}
