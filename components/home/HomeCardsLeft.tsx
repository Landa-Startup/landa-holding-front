import React from 'react';
import Button from '../common/Button';

interface HomeCardsLeftProps {
  text: string;
  addedClass?: string;
  link: string;
}

export default function HomeCardsLeft({
  text,
  addedClass,
  link,
}: HomeCardsLeftProps) {
  return (
    <div
      className={`first:self-end order-2  lg:mb-0 md:mb-0 md:order-1 md:py-32 mt-3 ${addedClass}`}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="font-barlow text-base md:text-xl leading-[30px] md:w-[491px] first:mb-0 mb-11 mt-4 text-justify">
          {text}
        </p>
        <Button
          size="visit"
          type="button"
          text="Visit Now"
          goto={link}
          bgColor="Primary"
        />
      </div>
    </div>
  );
}