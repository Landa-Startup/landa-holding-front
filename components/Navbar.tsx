import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className="justify-end items-center inline-flex z-10 absolute mt-9 ml-32">
      <div className="w-36 h-16 justify-end items-end gap-0.5 inline-flex">
        <Image
          src={'static/images/Logo.svg'}
          alt="Logo"
          width={500}
          height={500}
        />
        <div className="w-[93px] h-[15px] text-primary text-xl font-bold tracking-widest">
          LANDA
        </div>
      </div>
      <div className="justify-center items-center gap-14 inline-flex font-condensed ml-36">
        <div className="text-primary text-xl font-medium">HOME </div>
        <div className="text-stone-100 text-xl font-medium">ABOUT</div>
        <div className="text-stone-100 text-xl font-medium">CONTACT</div>
        <div className="text-stone-100 text-xl font-medium">MAGAZINE</div>
        <div className="text-stone-100 text-xl font-medium">WORK WITH US</div>
      </div>
    </div>
  );
}
