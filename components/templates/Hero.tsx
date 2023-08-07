import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/images/Home/Hero/businessman.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[745px] relative"
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
          className="w-[411px] h-[559px] absolute right-0 bottom-0"
          src={'static/images/Landa.svg'}
          alt="Landa"
          width={500}
          height={500}
        />
        <Link
          className="absolute flex items-center justify-center w-12 h-12 border border-white rounded-full animate-bounce left-10 bottom-4"
          href={'#LandaHolding'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="text-white bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
