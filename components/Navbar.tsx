import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className="w-[840.50px] h-[64.50px] justify-end items-center inline-flex absolute z-10 left-[120px] top-[46px]">
      <div className="w-[144.50px] h-[64.50px] justify-end items-end gap-0.5 inline-flex">
        <Image
          src={'static/images/Logo.svg'}
          alt="Logo"
          width={500}
          height={500}
        />
        <div className="w-[93px] h-[15px] text-[#AA8453] text-xl font-bold tracking-widest">
          LANDA
        </div>
      </div>
      <div className="justify-center items-center gap-[60px] inline-flex">
        <div className="text-[#AA8453] text-xl font-medium">HOME </div>
        <div className="text-stone-100 text-xl font-medium">ABOUT</div>
        <div className="text-stone-100 text-xl font-medium">CONTACT</div>
        <div className="text-stone-100 text-xl font-medium">MAGAZINE</div>
        <div className="text-stone-100 text-xl font-medium">WORK WITH US</div>
      </div>
    </div>
  );
}
