import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';

export default function TextCard({
  text,
  image,
  show,
  index,
  // link
}: {
  text: string;
  image: string;
  show: boolean;
  index: number;
  // link: string
}) {
  return show ? (
    <div className="flex flex-col relative font-barlow items-center md:w-[491px] text-black text-sm md:text-xl font-normal leading-[25px] md:leading-[30px]">
      {text}
      <br />
      <Image
        className={`w-20 h-32 absolute ${index === 2 ? 'left-0 top-72' : 'right-0'
          } -bottom-14 md:hidden`}
        src={image}
        alt={image}
        width={500}
        height={500}
      />
      {/* <Link href={link}>
        <Button text="Visit Now" size="visit" />
      </Link> */}
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
      {/* <Link href={link}>
        <Button text="Visit Now" size="visit" />
      </Link> */}
    </div>
  );
}
