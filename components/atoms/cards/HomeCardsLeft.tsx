import React from 'react';
import Button from '../Button';

export default function HomeCardsLeft({ text }: { text: string }) {
  return (
    <div className="h-[430px] first:self-end order-2 md:order-1">
      <div className="flex flex-col items-center justify-center">
        <p className="font-barlow text-base md:text-xl leading-[30px] w-[359px] md:w-[491px] mb-11 mt-4 md:mt-2 text-justify">
          {text}
        </p>
        <Button size="visit" type="button" text="Visit Now" />
      </div>
    </div>
  );
}
