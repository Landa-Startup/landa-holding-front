import Image from 'next/image';
import React from 'react';

export default function HomeCardsRight({
  images,
  titles,
}: {
  titles: string;
  images: Array<{ src: string; alt: string }>;
}) {
  return (
    <div className="flex flex-col self-start md:self-center" id="LandaHolding">
      <div className="flex flex-col items-start md:items-center space-y-2 mt-9 md:mt-0">
        <span className="text-xl md:text-3xl tracking-[5px] md:tracking-[11px] font-condensed">
          Landa Holding
        </span>
        <span className="font-gilda text-4xl md:text-6xl tracking-[6.5px]">
          {titles}
        </span>
      </div>
      <div className="flex space-x-7">
        {images.map((image, index) => (
          <div
            className="relative w-64 h-96 mt-5 md:first:mt-44 last:mt-14 hidden md:block"
            key={index}
          >
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes='100vh'
            />
          </div>
        ))}
      </div>
    </div>
  );
}