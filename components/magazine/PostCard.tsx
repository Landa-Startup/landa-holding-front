import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

export default function PostCard({
  image,
  date,
  title,
  description,
}: {
  image: string;
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-[725px] h-[384px] relative">
        <Image src={image} alt="Landa magazine post" layout="fill" />
      </div>
      <span className="text-primary font-condensed tracking-[2.4px]">
        {date}
      </span>
      <span className="font-gilda text-xl tracking-[2.8px]">{title}</span>
      <p className="font-barlow text-justify text-[#6B6B6B]">{description}</p>
      <Button goto="\" text="Read More" size="notVisit"/>
    </div>
  );
}
