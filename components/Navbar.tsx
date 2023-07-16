import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className="w-[878px] h-[73px] pr-[37.50px] pb-[8.50px] justify-start items-center inline-flex">
      <div className="w-[840.50px] h-[64.50px] pl-[311.50px] pt-[40.25px] pb-[0.25px] justify-end items-center inline-flex">
        <Image src={'static/images/Logo.svg'} alt="Logo" width={49.5} height={64.5}/>
        <div className="w-[93px] h-[15px] text-stone-500 text-xl font-normal tracking-widest">LANDA</div>
        <div className="justify-center items-center gap-[60px] inline-flex">
          <div className="text-stone-500 text-xl font-medium">HOME </div>
          <div className="text-stone-100 text-xl font-medium">ABOUT</div>
          <div className="text-stone-100 text-xl font-medium">CONTACT</div>
          <div className="text-stone-100 text-xl font-medium">MAGAZINE</div>
          <div className="text-stone-100 text-xl font-medium">WORK WITH US</div>
        </div>
      </div>
    </div>
  );
}
