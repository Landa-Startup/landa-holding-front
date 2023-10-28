import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import IconRoundedEmail from '../icons/IconRoundedEmail';
import IconRoundedInstagram from '../icons/IconInstagramRounded';
import IconWeb from '../icons/IconWeb';
import Image from 'next/image';

export default function AboutusPersonalTabs({
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
    <div className="w-[300px] md:w-[270px] h-[300px] border border-primary rounded-sm flex flex-col md:ml-12 lg:mt-20 relative">
      <Image
        className="object-cover"
        src={image}
        alt="Landa Directors"
        layout="fill"
        quality={90}
      />
      <div className="z-10 gap-2 flex flex-col ml-2 mt-2">
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
      <div className="flex flex-col items-center px-4 pb-4 mt-40 lg:mt44  ">
        <span className="font-normal text-lg text-black">{name}</span>
        <div className="font-light w-full flex items-center justify-center  ">
          <span className="font-light border-t-3 ">{position}</span>
        </div>
      </div>
    </div>
  );
}
