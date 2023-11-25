import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import IconRoundedEmail from '../icons/IconRoundedEmail';
import IconRoundedInstagram from '../icons/IconInstagramRounded';
import IconWeb from '../icons/IconWeb';
import Image from 'next/image';

export default function AboutUsPersonalTabs({
  image,
  name,
  position,
  linkedIn,
  email,
  website,
  instagram,
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
  email: string;
  website: string;
  instagram: string;
}) {
  return (
    <div className="w-[300px] md:w-[400px] h-[500px] rounded-sm flex flex-col justify-between mb-5 md:mb-20 relative">
      <Image
        className="object-cover"
        src={image}
        alt="Landa Directors"
        layout="fill"
        quality={100}
      />
      <div className="z-10 gap-2 flex flex-col ml-5 mt-5">
        <div>
          <Link href={linkedIn} target="_blank">
            <IconLinkedin />
          </Link>
        </div>

        <div>
          <a href={email}>
            <IconRoundedEmail />
          </a>
        </div>
        <div>
          <Link href={website} target="_blank">
            <IconWeb />
          </Link>
        </div>
        <div>
          <Link href={instagram} target="_blank">
            <IconRoundedInstagram />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-whiteGold z-10">
        <span className="text-3xl font-gilda text-black">{name}</span>
        <div className="flex items-center justify-center">
          <span className="text-xl font-barlow text-primary">{position}</span>
        </div>
      </div>
    </div>
  );
}
