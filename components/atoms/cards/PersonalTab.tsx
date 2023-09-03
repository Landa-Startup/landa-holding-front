import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../IconLinkedin';
import IconRoundedEmail from '../IconRoundedEmail';
import IconWeb from '@/components/atoms/IconWeb';

export default function PersonalTab({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) {
  return (
    <div
      className="w-[300px] md:w-[270px] h-[300px] border border-primary rounded-sm flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col p-4 space-y-2 self-start">
        <Link href="#" className="text-white">
          <IconLinkedin />
        </Link>
        <Link href="#" className="text-white">
          <IconRoundedEmail />
        </Link>
        <Link href="#" className="text-white">
          <IconWeb />
        </Link>
      </div>
      <div className="flex flex-col items-center border-t-2 px-4 pb-4 text-white">
        <span className="font-normal text-lg">{name}</span>
        {/* TODO: set team roles. */}
        {/* <span className="font-light">{position}</span> */}
      </div>
    </div>
  );
}
