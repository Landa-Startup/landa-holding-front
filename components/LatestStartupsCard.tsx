import Image from 'next/image';
import React from 'react';

export default function LatestStartupsCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-[391px] h-[468px] left-[118px] top-[131px] absolute border border-black">
      <div className="w-[391px] h-[468px] left-0 top-0 absolute" />
      <div className="w-[391px] h-[468px] left-0 top-0 absolute" />
      <Image
        className="w-[249px] h-[216px] left-[71px] top-[18px] absolute"
        src={image}
        width={500}
        height={500}
        alt={image}
      />
      <div className="w-[298px] h-[0px] left-0 top-[321px] absolute border border-neutral-800"></div>
      <div className="left-[26px] top-[280px] absolute text-neutral-800 text-2xl font-normal">
        {title}
      </div>
      <div className="w-[366px] left-[16px] top-[336px] absolute text-neutral-800 text-base font-normal">
        {description}
      </div>
      <div className="left-[298px] top-[411px] absolute bg-neutral-800 justify-start items-start gap-2.5 inline-flex">
        <div className="w-10 h-10 border border-neutral-800" />
      </div>
    </div>
  );
}
