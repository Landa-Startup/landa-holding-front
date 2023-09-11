import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Second() {
  return (
    <div className="flex flex-col bg-[#FFFBE6] relative" id="Roadmap-2">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-evenly py-16 z-10">
        <Image
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Seminar-amico (1) 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[500px] text-gray-600 text-5xl font-normal tracking-wider leading-snug">
            Completing the Professional Course with the Best Teachers
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-3" />
      <svg
        className="absolute top-0 left-[443px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="432"
        height="318"
        viewBox="0 0 432 318"
        fill="none"
      >
        <path
          d="M2 -1.95703C13.0468 5.81581 18.7636 17.2958 26.4223 27.1411C49.1349 56.3383 73.4656 84.3206 93.9773 114.7C108.521 136.241 128.556 157.6 148.752 176.029C175.212 200.174 204.333 222.086 238.682 240.17C286.983 265.598 372.774 300.102 430.054 316.15"
          stroke="#3D5656"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[1023px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="177"
        height="477"
        viewBox="0 0 177 477"
        fill="none"
      >
        <path
          d="M66.6289 2.30176C68.2841 17.0928 74.4826 31.9771 78.8223 46.552C91.6923 89.7754 103.119 132.884 117.615 175.808C127.894 206.243 154.5 240.5 165 272C193 326.5 155.5 407.08 113 428C16.5 475.5 10.2923 518.821 1.50002 572"
          stroke="#3D5656"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
