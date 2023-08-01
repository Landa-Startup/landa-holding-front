import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="z-10 inline-flex items-center justify-end ml-32 mt-9">
      <Link className="w-36 h-16 justify-end items-end gap-0.5 inline-flex" href={"/"}>
        <Image
          src={'static/images/Logo.svg'}
          alt="Logo"
          width={500}
          height={500}
        />
        <div className="w-[93px] h-[15px] text-primary text-xl font-bold tracking-widest">
          LANDA
        </div>
      </Link>
      <div className="inline-flex items-center justify-center gap-14 font-condensed ml-36">
        <Link className="text-xl font-medium text-primary" href={'/'}>
          HOME{' '}
        </Link>
        <Link className="text-xl font-medium text-stone-100" href={'/about'}>
          ABOUT
        </Link>
        <Link className="text-xl font-medium text-stone-100" href={'contact'}>
          CONTACT
        </Link>
        <Link className="text-xl font-medium text-stone-100" href={'/team'}>
          OUR TEAM
        </Link>
        <Link className="text-xl font-medium text-stone-100" href={'/magazine'}>
          MAGAZINE
        </Link>
        <Link
          className="text-xl font-medium text-stone-100"
          href={'/StartupsForm'}
        >
          WORK WITH US
        </Link>
      </div>
    </div>
  );
}
