'use client'
import React, { ReactElement } from 'react';
import Button from '../common/Button';
import { useRouter } from 'next/navigation';
import { language } from 'googleapis/build/src/apis/language';

export default function FeaturesCards({
  title,
  description,
  link,
  lang
}: {
  title: string;
  description: string;
  link: string;
  lang: string;
}) {
  const router = useRouter();

  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    router.push(link);
  }

  return (
    <div className="flex flex-col bg-white  p-8 md:w-[580px]">
      <span className="font-gilda text-2xl text-primary">{title}</span>
      <p className="font-barlow text-base leading-7">{description}</p>
      <Button
        goto={link}
        size="visit"
        text={lang === "en" ? "Register" : "ثبت نام"}
        addedClass="self-end"
        bgColor="Primary"
        onClick={handleOnClick}
        lang={lang}
      />
    </div>
  );
}
