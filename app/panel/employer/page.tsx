import LeftSection from '@/components/panel/LeftSection';
import MainSection from '@/components/panel/MainSection';
import Navbar from '@/components/panel/Navbar';
import RightSection from '@/components/panel/RightSection';
import { Metadata } from 'next';
import React from 'react';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Panel (Employer)',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-[calc(100vh)-5px] h-screen flex space-x">
        <LeftSection />
        <MainSection />
        <RightSection />
      </div>
    </div>
  );
}