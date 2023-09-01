import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Third() {
  return (
    <div className="flex flex-col bg-[#80C555] relative" id="Roadmap-3">
      <div className="flex justify-between py-16 z-10">
        <div className="relative w-[500px] h-[500px]">
          <Image
            className="absolute left-40 bottom-20"
            alt="Landa academy"
            src={'static/images/Academy/Roadmap/Certification-bro 1.svg'}
            width={500}
            height={500}
          />
          <Image
            className="absolute"
            alt="Landa academy"
            src={'static/images/Academy/Roadmap/Seminar-amico (1) 2.svg'}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col mt-5">
          <div className="w-[500px] text-gray-600 text-5xl font-normal tracking-wider leading-snug">
            Optain A valid Certificate of achievement
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-4" />
      <svg
        className=" absolute top-0 left-[482px]"
        xmlns="http://www.w3.org/2000/svg"
        width="586"
        height="850"
        viewBox="0 0 586 850"
        fill="none"
      >
        <path
          d="M583.829 -2.04297C571.329 10.457 556.329 55.457 531.5 85.9999C475.186 155.275 373.002 202.5 334.002 210C254.5 225.289 110.589 300.567 92.0017 322.5C42.0017 381.5 -31.498 588.5 19.5024 670.277C81.002 724 152 805 195.5 850"
          stroke="#3D5656"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
