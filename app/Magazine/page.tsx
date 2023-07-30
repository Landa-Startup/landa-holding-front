import React from 'react';
import LandaMagazine from '@/components/LandaMagazine';
import LandaMagazineCard from '@/components/LandaMagazineCard';
import MagazineStartUps from '@/components/MagazineStartUps';
import Hero from '@/components/Hero';
import MagazineModernPost from '@/components/MagazineModernPost';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

export default function page() {
  return (
    <div>
      <Banner
        image="/static/images/b56efbfe712a222c7f569520462f2703.jpg"
        title="Magazine"
      />
      <div className="grid grid-row w-screen">
        <div className="grid grid-cols-5 divide-x-2 divide-neutral-400 h-[884px] bg-neutral-500">
          <div className="col-span-2 bg-neutral-100">
            <MagazineStartUps />
          </div>
          <div className="col-span-3 bg-neutral-100">
            <MagazineModernPost />
          </div>
        </div>
      </div>
    </div>
  );
}
