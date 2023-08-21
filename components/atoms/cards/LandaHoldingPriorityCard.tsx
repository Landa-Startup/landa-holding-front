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
    <div className="w-48 h-24 md:w-72 md:h-40 flex justify-center relative border border-primary overflow-hidden">
      <Image
        className="absolute -right-9 -bottom-14 w-12 md:w-[150px] h-12 md:h-[150px] opacity-10"
        src={image}
        alt=""
        width={500}
        height={500}
      />
      <div className=" justify-center items-center gap-2.5 inline-flex">
        <div className="flex items-center text-black text-base md:text-2xl font-normal font-gilda w-32 justify-center text-center">
          {title}
        </div>
      </div>
      <Image
        className="absolute top-2 left-2 w-8 md:w-[50px] h-8 md:h-[50px]"
        src={image}
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
}
