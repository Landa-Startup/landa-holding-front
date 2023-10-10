import LeftSection from '@/components/panel/LeftSection';
import MainSection from '@/components/panel/MainSection';
import Navbar from '@/components/panel/Navbar';
import RightSection from '@/components/panel/RightSection';
import React from 'react';

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
