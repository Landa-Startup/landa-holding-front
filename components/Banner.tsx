import React from 'react';

export default function Banner({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
      }}
      className="h-[512px] relative"
    >
      <div className="w-[323px] h-[71px] flex-col justify-start items-start absolute top-64 left-32 inline-flex">
        <div className="text-neutral-50 text-base font-normal tracking-[5.60px] font-condensed">
          LANDA HOLDING
        </div>
        <div className="text-neutral-50 text-[64px] font-normal font-gilda">
          {title}
        </div>
      </div>
    </div>
  );
}
