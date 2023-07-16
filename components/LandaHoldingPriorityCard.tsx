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
    <div>
      <div className="w-[361px] h-[168px] relative border border-stone-500">
        <Image
          className="w-[120px] h-[120px] left-[254px] top-[62px] absolute"
          src={image}
          alt={image}
          width={500}
          height={500}
        />
        <Image
          className="w-[60px] h-[60px] left-[17px] top-[13px] absolute"
          src={image}
          alt={image}
          width={500}
          height={500}
        />
        <div className="w-[238px] p-2.5 left-[62px] top-[62px] absolute justify-center items-center gap-2.5 inline-flex">
          <div className="w-[197px] text-center text-black text-2xl font-normal">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
