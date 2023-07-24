import Image from 'next/image';
import React from 'react';

export default function ImageCard({
  title,
  imageOne,
  imageTwo,
  reverse,
}: {
  title: string;
  imageOne: string;
  imageTwo: string;
  reverse: boolean;
}) {
  return (
    <div>
      <div className="w-[557px] font-condensed h-11 text-center text-neutral-800 text-3xl font-normal uppercase tracking-[11.20px]">
        Landa holding
      </div>
      {reverse ? (
        <div className="text-center flex flex-row-reverse">
          <span className="text-neutral-800 text-6xl font-normal tracking-[6.40px]">
            {title}
          </span>
          <span className="text-neutral-800 text-6xl font-normal tracking-[7.04px]"></span>
          <div className="grid grid-cols-2 gap-2 mt-14">
            <Image
              className="w-64 h-96 mt-32"
              src={imageOne}
              alt={imageOne}
              width={500}
              height={500}
            />
            <Image
              className="w-64 h-96"
              src={imageTwo}
              alt={imageTwo}
              width={500}
              height={500}
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <span className="text-neutral-800 text-6xl font-normal tracking-[6.40px]">
            {title}
          </span>
          <span className="text-neutral-800 text-6xl font-normal tracking-[7.04px]"></span>
          <div className="grid grid-cols-2 gap-2 mt-14">
            <Image
              className="w-64 h-96 mt-32"
              src={imageOne}
              alt={imageOne}
              width={500}
              height={500}
            />
            <Image
              className="w-64 h-96"
              src={imageTwo}
              alt={imageTwo}
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
}
