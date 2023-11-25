import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landa Holding | Event',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page() {
  return (
    <div>
      <Banner image="/static/images/EventsBanner.png" title="UPCOMING EVENTS" />
    </div>
  );
}
