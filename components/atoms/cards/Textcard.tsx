import React from 'react';
import Button from '../Button';
import Image from 'next/image';

export default function TextCard({
  text,
  image,
  show,
  reverse,
}: {
  text: string;
  image: string;
  show: boolean;
  reverse: boolean;
}) {
  return reverse === false ? (
    show === true ? (
      <div className="flex flex-col relative font-barlow items-center md:w-[491px] text-black text-sm md:text-xl font-normal leading-[25px] md:leading-[30px]">
        {text}
        <br />
        <Image
          className="w-20 h-32 absolute right-0 -bottom-14 md:hidden"
          src={image}
          alt={image}
          width={500}
          height={500}
        />
        <Button text="Visit Now" size="visit" />
      </div>
    ) : (
      <div className="flex flex-col relative font-barlow items-center md:w-[491px] text-black text-sm md:text-xl font-normal leading-[25px] md:leading-[30px]">
        {text}
        <br />
        <Image
          className="hidden"
          src={image}
          alt={image}
          width={500}
          height={500}
        />
        <Button text="Visit Now" size="visit" />
      </div>
    )
  ) : show === true ? (
    <div className="flex flex-col relative font-barlow items-center md:w-[491px] text-black text-sm md:text-xl font-normal leading-[25px] md:leading-[30px]">
      {text}
      <br />
      <Image
        className="w-20 h-32 absolute right-0 -bottom-14 md:hidden"
        src={image}
        alt={image}
        width={500}
        height={500}
      />
      <Button text="Visit Now" size="visit" />
    </div>
  ) : (
    <div className="flex flex-col relative font-barlow items-center md:w-[491px] text-black text-sm md:text-xl font-normal leading-[25px] md:leading-[30px]">
      {text}
      <br />
      <Image
        className="hidden"
        src={image}
        alt={image}
        width={500}
        height={500}
      />
      <Button text="Visit Now" size="visit" />
    </div>
  );
}
