import React from 'react';
import Banner from '@/components/common/Banner';
import LandaGene from '@/components/landa-gene/LandaGene';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Landa Gene',
  description: '',
};

export default function Page() {
  return (
    <div className='h-screen md:h-auto snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth'>
      <Banner
        image="/static/images/gene.jpg"
        title="LANDA GENE"
      />

      <LandaGene />
    </div>
  );
}
