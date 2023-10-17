import React from 'react';
import MagazineStartUps from '@/components/magazine/MagazineStartUps';
import MagazineModernPost from '@/components/magazine/MagazineModernPost';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description: '',
};

export default function MagazinePage() {
  return (
    <div>
      <Banner image="/static/images/Magazine/hero.png" title="Magazine" />
      <div className="grid grid-cols-5 gap-x-2">
        <div className="col-span-2 bg-neutral-100">
          <MagazineStartUps />
        </div>
        <div className="col-span-3 bg-neutral-100">
          <MagazineModernPost />
        </div>
      </div>
    </div>
  );
}
