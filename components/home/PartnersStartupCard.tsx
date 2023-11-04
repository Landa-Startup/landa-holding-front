import Image from 'next/image';
import React from 'react';

export default function PartnersStartupCard({
  logo,
  title,
  description,
}: {
  logo: number;
  title: string;
  description: string;
}) {
  return (
    <div className="p-5 gap-4 w-[400px] h-[220px] bg-whiteGold flex items-start rounded-md">
      <Image
        className="object-contain"
        src={`/static/images/Home/contact/${logo}.png`}
        alt="r"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <span className="text-xl">{title}</span>
        <p className="text-xs leading-5 tracking-[1.3px]">{description}</p>
      </div>
    </div>
  );
}
