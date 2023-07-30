import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="justify-end items-center inline-flex z-10 mt-9 ml-32">
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
      <div className="justify-center items-center gap-14 inline-flex font-condensed ml-36">
        <Link className="text-primary text-xl font-medium" href={'/'}>
          HOME{' '}
        </Link>
        <Link className="text-stone-100 text-xl font-medium" href={'/about'}>
          ABOUT
        </Link>
        <Link className="text-stone-100 text-xl font-medium" href={'contact'}>
          CONTACT
        </Link>
        <Link className="text-stone-100 text-xl font-medium" href={'/magazine'}>
          MAGAZINE
        </Link>
        <Link
          className="text-stone-100 text-xl font-medium"
          href={'/StartupsForm'}
        >
          WORK WITH US
        </Link>
      </div>
    </div>
  );
}
