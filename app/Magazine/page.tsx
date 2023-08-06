import React from 'react';
import LandaMagazine from '@/components/molecules/LandaMagazine';
import LandaMagazineCard from '@/components/LandaMagazineCard';
import MagazineStartUps from '@/components/molecules/MagazineStartUps';
import Hero from '@/components/molecules/Hero';
import MagazineModernPost from '@/components/atoms/MagazineModernPost';
import Footer from '@/components/templates/Footer';
import Banner from '@/components/molecules/Banner';

export default function page() {
  return (
    <div>
      <Banner
        image="/static/images/Magazine/hero.png"
        title="Magazine"
      />
      <div className="grid grid-row">
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
