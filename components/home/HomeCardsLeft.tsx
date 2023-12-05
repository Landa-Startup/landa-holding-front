import React from 'react';
import Button from '../common/Button';
import { HomeCardsLeftProps } from '../../types/global';

export default function HomeCardsLeft({
  text,
  addedClass,
  link,
  lang
}: HomeCardsLeftProps) {
  return (
    <div
      className={`order-2 mt-3  first:self-end md:order-1 md:mb-0 md:py-32 lg:mb-0 ${addedClass}`}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="mb-11 mt-10 text-justify font-barlow text-base leading-[30px] first:mb-0 md:w-[491px] md:text-xl">
          {text}
        </p>
        <Button
          size="visit"
          type="button"
          goto={link}
          bgColor="Primary"
          lang={lang}
        />
      </div>
    </div>
  );
}
