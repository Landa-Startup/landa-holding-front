import Image from 'next/image';
import React from 'react';

export default function ImageCard({
  title,
  imageOne,
  imageTwo,
}: {
  title: string;
  imageOne: string;
  imageTwo: string;
}) {
  return (
    <div>
      {/* Title */}
      <div className="md:w-[557px] font-condensed h-11 text-center text-neutral-800 text-xs md:text-3xl font-normal uppercase tracking-[3px] md:tracking-[11.20px]">
        Landa holding
      </div>

      <div className="text-center -mt-10 md:mt-0">
        {/* Main Title */}
        <span className="text-neutral-800 text-4xl md:text-6xl font-normal tracking-[3.2px] md:tracking-[6.40px]">
          {title}
        </span>

        {/* Empty Span (Needs Review) */}
        <span className="text-neutral-800 text-6xl font-normal tracking-[7.04px]"></span>

        {/* Image Grid */}
        <div className="grid-cols-2 gap-2 md:mt-14 hidden md:grid">
          {/* First Image */}
          <div className="relative w-64 h-96">
            <Image
              className="relative w-64 h-96 md:mt-32 object-cover"
              src={imageOne}
              alt={imageOne}
              layout="fill"
              quality={100}
            />
          </div>

          {/* Second Image */}
          <div className="relative w-64 h-96">
            <Image
              className="hidden md:block object-cover"
              src={imageTwo}
              alt={imageTwo}
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
