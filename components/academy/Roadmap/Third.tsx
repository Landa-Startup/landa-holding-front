import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Fourth() {
  return (
    <div
      className="flex flex-col bg-[#263238] text-white relative"
      id="Roadmap-3"
    >
      <div className="flex flex-col md:flex-row-reverse justify-evenly py-16 z-10 px-10">
        <Image
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Office work-amico 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[480px] text-4xl md:text-5xl font-normal tracking-wider leading-snug">
            Employment opportunities
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-[#80C555] rounded-full mt-3" />
            <div className="w-[454px] text-xl font-normal font-barlow leading-10 text-justify">
              After completing the intensive 6-month academy program, you will
              have the opportunity to officially work alongside experienced
              mentors on startups and international projects to gain valuable
              work experience.
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-5" color="white" />
      <svg
        className="absolute top-0 left-[655px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="408"
        height="314"
        viewBox="0 0 408 314"
        fill="none"
      >
        <path
          d="M41.4075 2.19727C40.2696 13.5766 31.9552 25.1025 27.4884 35.2015C20.0991 51.9077 16.7802 67 12.9952 86.2862C10.5001 99 9.00014 109 5.24641 125.461C0.5 168.5 -2.42545 221.726 15.5782 262.643C45.9345 331.635 112.764 367.285 177.155 401.118C201.156 413.728 227.681 421.11 249.764 437.279C264.108 447.78 278.756 458.52 293.387 468.561C337.294 498.693 367.604 538.097 377.189 590.82C378.606 598.614 383.338 605.308 385.512 612.919C390.75 631.251 392.37 647.248 394.122 667.017C398.184 712.858 405.602 759.422 405.602 805.491"
          stroke="#FFFBE6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[672px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="237"
        height="346"
        viewBox="0 0 237 346"
        fill="none"
      >
        <path
          d="M234.934 1.82227C233.014 22.9377 203.414 37.9531 195.999 57.5C183.537 90.3543 171.609 104.382 175.999 139.5C180.5 175.5 177.98 211.673 139.5 224.5C130.5 227.5 143 228.683 63 228.683C-1.23571 228.683 -12.5016 315 18.9999 350.5"
          stroke="#F1F8EC"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
