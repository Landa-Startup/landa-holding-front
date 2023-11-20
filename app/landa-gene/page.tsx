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
    <div>
      <Banner
        image="/static/images/gene.jpg"
        title="LANDA GENE"
      />

      <LandaGene />
    </div>
  );
}
