import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function First() {
  return (
    <div className="flex flex-col bg-[#F1F8EC] relative" id="Roadmap-1">
      <div className="flex justify-evenly py-16">
        <Image
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Course app-bro 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="w-[500px] text-gray-600 text-5xl font-normal tracking-wider leading-snug">
            Registration in the Optional Course
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-yellow-400 rounded-full mt-3" />
            <div className="w-[500px] text-gray-600 text-2xl font-normal leading-10 text-justify">
              Embark on your adventurous journey at Landa Academy by
              participating in our tailored crash courses designed by mentors
              from the Landa Holding.
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-2" />
      <svg
      className='absolute -bottom-1 left-80'
        xmlns="http://www.w3.org/2000/svg"
        width="133"
        height="305"
        viewBox="0 0 133 305"
        fill="none"
      >
        <path
          d="M1.60938 1.52441C2.07138 9.84058 5.64725 17.7403 7.33001 25.8175C12.3204 49.7715 18.175 73.3319 22.0626 97.5214C24.8192 114.673 29.8997 133.002 35.5 149.5C42.8373 171.115 51.632 191.934 63.2042 211.542C79.4765 239.115 110.025 281.294 131.5 305"
          stroke="#3D5656"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
