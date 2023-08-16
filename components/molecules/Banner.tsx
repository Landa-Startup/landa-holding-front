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
      className="h-[250px] md:h-[512px] flex items-stretch"
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"> */}
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-neutral-50 text-base font-normal tracking-[5.60px] font-condensed">
          LANDA HOLDING
        </p>
        <p className="text-neutral-50 text-[64px] font-normal font-gilda">
          {title}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
