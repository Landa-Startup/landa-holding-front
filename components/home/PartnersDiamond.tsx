import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PartnersDiamond({
  backgroundImage,
  name,
}: {
  backgroundImage: number;
  name: string;
}) {
  return (
    <Link
      className="bg-whiteGold w-[120px] h-[120px] rounded-lg flex items-center justify-center rotate-45 overflow-hidden relative group flex-shrink-0"
      href={'/'}
    >
      <div className="w-[100px] h-[100px]">
        <div className="-rotate-45">
          <Image
            className="object-contain"
            src={`/static/images/Home/contact/${backgroundImage}.png`}
            alt="r"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 flex items-center justify-center group-hover:opacity-100">
        <span className="text-white text-center -rotate-45 uppercase">
          {name}
        </span>
      </div>
    </Link>
  );
}
