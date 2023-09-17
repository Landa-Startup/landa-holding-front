import React from 'react';

export default function Banner({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-[250px] md:h-[512px] absolute inset-0"
      ></div>

      <div className="h-[250px] md:h-[512px] justify-center md:justify-center flex items-stretch relative">
        <div className="flex flex-col justify-center items-center  ">
          <p className="text-neutral-50 text-base font-normal tracking-[5.60px] font-condensed">
            LANDA HOLDING
          </p>
          <p className="text-neutral-50 text-[32px] font-normal font-gilda md:text-[64px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
