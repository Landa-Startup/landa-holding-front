'use client'
import React, { ReactElement } from 'react';
import Button from '../common/Button';
import { useRouter } from 'next/navigation';

export default function FeaturesCards({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  const router = useRouter();

  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    router.push(link);
  }

  return (
    <div className="flex flex-col bg-white  md:w-[580px] p-8">
      <span className="font-gilda text-2xl text-primary">{title}</span>
      <p className="font-barlow text-base leading-7">{description}</p>
      <Button
        goto={link}
        size="visit"
        text="Register"
        addedClass="self-end"
        bgColor="Primary"
        onClick={handleOnClick}
      />
    </div>
  );
}
