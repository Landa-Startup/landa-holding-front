import React from 'react';
import Button from '../Button';

interface HomeCardsLeftProps {
  text: string;
  addedClass?: string;
}

export default function HomeCardsLeft({
  text,
  addedClass,
}: HomeCardsLeftProps) {
  return (
    <div
      className={`h-[430px] first:self-end order-2 md:order-1 ${addedClass}`}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="font-barlow text-base md:text-xl leading-[30px] md:w-[491px] first:mb-0 mb-11 mt-4 text-justify">
          {text}
        </p>
        <Button
          size="visit"
          type="button"
          text="Visit Now"
          goto="/StartupsForm"
          bgColor="Primary"
        />
      </div>
    </div>
  );
}