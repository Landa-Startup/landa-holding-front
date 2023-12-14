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
  instagram
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
    <div className="relative flex h-[400px] w-full flex-col rounded-sm md:w-[400px]">
      <Image
        className="object-cover"
        src={image}
        alt="Landa Directors"
        layout="fill"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
      <div className="z-10 ml-2 mt-2 mb-2 flex flex-col gap-2 rtl:mr-2">
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
      <div className="absolute -bottom-[4.7rem] w-full flex flex-col items-center px-4 pb-4 ">
        <span className="text-lg font-normal font-gilda text-black">{name}</span>
        <div className="flex w-full items-center justify-center font-light">
          <span className="border-t-3 font-gilda font-light ">{position}</span>
        </div>
      </div>
    </div>
  );
}
