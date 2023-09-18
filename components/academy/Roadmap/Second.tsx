import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Third() {
  return (
    <div
      className="flex flex-col h-screen bg-[#80C555] text-white relative"
      id="Roadmap-2"
    >
      <div className="flex flex-col md:flex-row justify-evenly pt-2 pb-8 z-10 px-10 space-y-4">
        <Image
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/At the office-amico 2.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[480px] text-4xl my-14 md:text-5xl font-normal tracking-wider leading-snug text-[#3D5656]">
            Joining Landa Academy and benefiting from its facilities.
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-[#80C555] rounded-full mt-3" />
            <div className="w-[454px] text-xl font-normal font-barlow leading-10 text-justify"></div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-3" color="white" />
      <svg
        className="absolute top-0 left-[620px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="367"
        height="364"
        viewBox="0 0 367 364"
        fill="none"
      >
        <path
          d="M339.5 0.499585C377.5 -10.0014 349.5 -5.2906 339.5 0.499585ZM339.5 0.499585C287 15.0075 263.768 25.3335 221.5 94.4993C210.5 112.499 181.5 133.455 154.5 139.499C121 146.999 118.5 149.435 104.5 153.499C90.5 157.564 59.5 179.999 57.5 181.999C48.4653 191.034 41 199.999 28 223.001C14.329 247.19 11.2727 273.5 11.2727 290.015C11.2727 307.231 19.0948 337.789 11.2727 352.854C8.95374 357.32 7.7418 361.572 2.11914 361.572"
          stroke="#FFFBE6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
