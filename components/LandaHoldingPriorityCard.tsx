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
    <div className="w-[290px] h-[168px] relative border border-primary">
      <Image
        className="w-[70px] h-[70px] left-[210px] top-[90px] absolute opacity-25"
        src={image}
        alt=""
        width={500}
        height={500}
      />
      <Image
        className="w-[50px] h-[50px] left-[11px] top-[7px] absolute"
        src={image}
        alt=""
        width={500}
        height={500}
      />
      <div className="w-[238px] p-2.5 left-[61px] top-[72px] absolute justify-center items-center gap-2.5 inline-flex">
        <div className="w-[197px] flex items-center text-black text-2xl font-normal font-gilda">
          {title}
        </div>
      </div>
    </div>
  );
}
