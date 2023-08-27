import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LatestStartupsCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      className="w-[264px] md:w-[350px] h-[254px] md:h-[468px] relative border border-black group hover:shadow-lg"
      href={link}
    >
      <div className="w-[264px] md:w-[350px] h-[254px] md:h-[468px] left-0 top-0 absolute" />
      <div className="w-[264px] md:w-[350px] h-[254px] md:h-[468px] left-0 top-0 absolute" />
      <Image
        alt={image}
        className="w-[124px] md:w-[249px] h-[116px] md:h-[216px] left-[71px] md:left-[55px] top-2 md:top-[18px] absolute object-contain group-hover:scale-110 transition-all"
        src={image}
        width={500}
        height={500}
      />
      <div className="w-[155px] md:w-[298px] h-[0px] left-4 md:left-0 top-[156px] md:top-[295px] absolute border border-neutral-800"></div>
      <div className="left-[26px] top-[130px] md:top-[250px] absolute text-neutral-800 text-2xl font-normal font-gilda">
        {title}
      </div>
      <div className="w-[225px] md:w-[320px] left-[16px] bottom-[28px] md:bottom-20 absolute text-neutral-800 text-sm md:text-base font-normal leading-[15px] font-barlow">
        {description}
      </div>
      <div className="right-[12px] bottom-[12px] md:left-[298px] md:top-[411px] absolute bg-neutral-800 justify-start items-start gap-2.5 inline-flex">
        <div className="w-6 md:w-10 h-6 md:h-10 border border-neutral-800" />
        <svg
          className="absolute text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
