import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/static/images/businessman.png')" }}
      className="h-[850px] relative"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-[557px] h-11 text-center text-white text-[32px] font-normal tracking-[11.20px]">
          Landa Holding
        </div>
        <div className="w-[689px] h-[71px] text-right text-neutral-50 text-opacity-95 text-[64px] font-normal tracking-[6.40px]">
          Acceleration Center
          <br />
        </div>
        <div className="w-[572px] text-center text-neutral-50 text-opacity-95 text-base font-normal leading-[30px] pt-[42px]">
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
        <div className="w-12 h-12 rounded-full border border-white flex justify-center items-center absolute left-[40px] bottom-[76px]">
          <div className="w-4 h-4 border-b-2 border-r-2 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
