import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/images/businessman.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[850px] relative"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-[557px] h-11 text-center text-white text-3xl font-normal tracking-[11.20px] font-condensed">
          Landa Holding
        </div>
        <div className="h-20 font-gilda text-right text-neutral-50 text-opacity-95 text-6xl font-normal tracking-[6.40px]">
          Acceleration Center
          <br />
        </div>
        <div className="w-[572px] text-center font-barlow text-neutral-50 text-opacity-95 text-base font-normal leading-8 pt-10">
          Landa Holding is an international investment company active in Iran
          and Canada.
          <br />
          Landa Holding acts as a supporter of entrepreneurs, investors,
          business owners and everybody who is willing to start its own
          start-up.
          <br />
          Our main focus is to make your business boost internationally.
        </div>
        <Image
          className="w-[411] h-[559] absolute right-0 bottom-0"
          src={'static/images/Landa.svg'}
          alt="Landa"
          width={500}
          height={500}
        />
        <Link
          className="w-12 h-12 rounded-full border border-white flex justify-center items-center absolute left-10 bottom-28"
          href={'#LandaHolding'}
        >
          <div className="w-4 h-4 border-b-2 border-r-2 transform rotate-45"></div>
        </Link>
      </div>
    </div>
  );
}
