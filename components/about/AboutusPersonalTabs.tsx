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
    <div className="w-[300px] md:w-[400px] h-[500px] rounded-sm flex flex-col justify-between mb-5 md:mb-20 relative">
      <Image
        className="object-cover"
        src={image}
        alt="Landa Directors"
        layout="fill"
        quality={90}
      />
      <div className="z-10 ml-2 mt-2 flex flex-col gap-2">
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
      <div className="lg:mt44 mt-40 flex flex-col items-center px-4 pb-4  ">
        <span className="font-gilda text-lg font-normal text-black">{name}</span>
        <div className="flex w-full items-center justify-center font-barlow font-light">
          <span className="border-t-3 font-light ">{position}</span>
        </div>
      </div>
    </div>
  );
}
