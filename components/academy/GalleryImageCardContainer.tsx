import React from 'react';
import GalleryImageCard from './GalleryImageCard';
import { images } from '../../app/[lng]/statics';

export default function GalleryImageCardContainer() {
  return (
    <div
      className="grid
      grid-cols-2 gap-y-5 md:gap-24 md:mx-32 pb-7 justify-items-center"
    >
      {images.map((image, index) => (
        <GalleryImageCard key={index} src={image.src} />
      ))}
    </div>
  );
}
