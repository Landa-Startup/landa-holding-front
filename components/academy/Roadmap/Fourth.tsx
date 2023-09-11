import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Fourth() {
  return (
    <div
      className="flex flex-col bg-[#263238] text-white relative"
      id="Roadmap-4"
    >
      <div className="flex flex-col md:flex-row-reverse justify-evenly py-16 z-10">
        <Image
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Office work-amico 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[480px] text-5xl font-normal tracking-wider leading-snug">
            Employment opportunities for top members
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-[#80C555] rounded-full mt-3" />
            <div className="w-[500px] text-2xl font-normal leading-10 text-justify">
              After completing the intensive 6-month academy program, you will
              have the opportunity to officially become a part of Landa Holding.
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-5" />
      <svg
        className="absolute top-0 left-[655px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="329"
        height="850"
        viewBox="0 0 329 850"
        fill="none"
      >
        <path
          d="M7.4989 -2C18 5.5 38.9698 39.7963 47.5 46C64 58 121.103 59.1229 131.5 69C173.216 108.63 126 160.5 186.649 174.981C222 174.981 235.5 200 235.5 211.5C235.5 223 243.391 237.439 253.279 249.054C263.333 260.862 270.617 274.157 279.371 286.878C292.485 305.934 305.766 326.16 314.394 347.729C324.229 372.319 327.002 393.038 327.002 419.263C327.002 441.529 317.345 460.738 304.85 479.064C288.241 503.424 269.07 525.876 248.201 546.745C238.754 556.192 229.243 565.703 219.833 575.113C217.63 577.316 222.466 545.522 219.833 546.745M219.833 546.745C213.041 549.898 230.749 587.316 224.473 591.5C217.637 596.058 226.76 542.192 219.833 546.745ZM219.833 546.745C203.995 557.152 171.5 620 124.5 632C103 637.489 90.9992 636.5 47.9995 654C32.0507 660.491 18.4995 671.5 4.5 705C0.760308 713.949 0.500108 741 10.4993 767.5C15.0888 779.663 26.9985 832.456 40.9993 854.5"
          stroke="#80C555"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
