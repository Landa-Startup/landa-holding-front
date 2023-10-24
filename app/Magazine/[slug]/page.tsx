import React from 'react';
import MagazineCardContainer from '@/components/magazine/MagazineCardContainer';

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <MagazineCardContainer url={params.slug} />;
    </div>
  );
}
