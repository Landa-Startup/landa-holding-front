import React from 'react';
import Link from 'next/link';
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
    <div className="relative flex h-[320px] w-[300px] flex-col justify-between rounded-sm border border-primary">
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
      <div className="z-10 flex flex-col space-y-2 self-start p-4">
        <Link
          href={linkedIn}
          className="rounded-full bg-[#222] p-2 text-white opacity-75"
        >
          <LinkedIn />
        </Link>
      </div>

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center px-4 pb-4 text-white">
        <span className=" font-barlow text-lg font-normal">{name}</span>
        <div className="flex w-full items-center justify-center border-t-2 font-light">
          <span className="border-t-3 font-barlow font-light">{position}</span>
        </div>
      </div>
    </div>
  );
}
