import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import LinkedIn from '../icons/about/LinkedIn';
import Image from 'next/image';

export default function PersonalTab({
  image,
  name,
  position,
  linkedIn,
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
}) {
  return (
    <div className="w-[300px] h-[320px] border border-primary rounded-sm flex flex-col justify-between relative">
      {/* Background Image */}
      <Image
        className="object-cover"
        src={image}
        alt="Landa People"
        layout="fill"
        quality={90}
        loading="lazy"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.2)] to-transparent"></div>

      {/* LinkedIn Link */}
      <div className="flex flex-col p-4 space-y-2 self-start z-10">
        <Link
          href={linkedIn}
          className="text-white rounded-full bg-[#222] p-2 opacity-75"
        >
          <LinkedIn />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center px-4 pb-4 text-white z-10">
        <span className="font-normal text-lg">{name}</span>
        <div className="font-light w-full flex items-center justify-center border-t-2">
          <span className="font-light border-t-3">{position}</span>
        </div>
      </div>
    </div>
  );
}
