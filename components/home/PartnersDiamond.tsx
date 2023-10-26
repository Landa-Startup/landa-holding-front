import Image from 'next/image';
import React from 'react';

export default function PartnersDiamond({
  backgroundImage,
}: {
  backgroundImage: number;
}) {
  return (
    <div className="bg-whiteGold w-[120px] h-[120px] rounded-lg flex items-center justify-center rotate-45 overflow-hidden odd:-translate-y-32">
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
    </div>
  );
}
