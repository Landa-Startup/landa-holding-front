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
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-[250px] lg:h-[512px] absolute inset-0 blur-[2px]"
      ></div>

      <div
        className="h-[250px] lg:h-[512px] justify-center flex items-center relative"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Adding overlay with transparency
      >
        {/* Content Overlay */}
        <div className="h-[250px] lg:h-[512px] justify-center lg:justify-start flex items-stretch relative">
          <div className="flex flex-col justify-center items-center text-center lg:m-auto md:m-auto">
            {/* Text Content */}
            <p className="text-neutral-50 text-base font-normal tracking-[5.60px] font-condensed">
              LANDA HOLDING
            </p>
            <p className="text-neutral-50 text-[32px] font-normal font-gilda md:text-[50px] lg:text-[74px] xl:text-[84px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
