import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Third() {
  return (
    <div className="flex flex-col bg-[#80C555] relative" id="Roadmap-2">
      <div className="flex justify-between">
        <div className="relative w-[500px] h-[500px]">
          <Image
            className="absolute left-40 top-32 z-10"
            alt="Landa academy"
            src={'static/images/Academy/Roadmap/At the office-amico 1.svg'}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col md:pt-40">
          <div className="md:w-[592px] text-gray-600 text-5xl font-barlow font-normal tracking-wider leading-snug">
            Joining Landa Academy and benefiting from its facilities.
          </div>
          <ul className="text-white font-barlow text-xl font-medium leading-[50px] tracking-[1px]">
            <li>1.Personalized mentoring by industry professionals</li>
            <li>2.Co-working spaces</li>
            <li>3.Free participation at the next courses</li>
            <li>4.Engagement in real projects and international startups</li>
            <li>5.Talent identification of adolescent</li>
            <li>6.Teaching Fundamentals of Entrepreneurship</li>
            <li>7.How to work in international markets</li>
          </ul>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-3" />
      <svg
        className=" absolute top-0 right-[540px] hidden md:block"
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
      <svg
        className="absolute bottom-4 left-[467px] hidden md:block"
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
    </div>
  );
}
