import Image from 'next/image';
import React from 'react';

export default function LandaHoldingPriorityCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="w-48 h-32 md:w-72  md:h-40  w-40 flex justify-center relative border border-primary  ">
      {/* Background Image */}
      <Image
        className="absolute -right-2 lg:-right-9 -bottom-2 md:-bottom-14 w-12 lg:w-[150px] h-12 md:h-[150px] opacity-5"
        src={image}
        alt=""
        width={500}
        height={500}
      />

      {/* Title Container */}
      <div className="justify-center items-center gap-2.5 inline-flex">
        <div className="flex items-center text-black text-base lg:text-2xl font-normal font-gilda w-32 justify-center text-center md:text-xl w-20">
          {title}
        </div>
      </div>

      {/* Small Image Overlay */}
      <Image
        className="absolute top-2 left-2 w-8 md:w-[50px] h-18 md:h-[50px]"
        src={image}
        alt="Landa Priority"
        width={500}
        height={500}
      />
    </div>
  );
}
