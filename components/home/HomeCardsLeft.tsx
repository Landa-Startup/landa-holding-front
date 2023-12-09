import React from 'react';

import { HomeCardsLeftProps } from '../../types/global';
import ButtonRefactor from '../common/ButtonRefactor';

export default function HomeCardsLeft({
  text,
  addedClass
}: HomeCardsLeftProps) {
  return (
    <div
      className={`order-2 mt-3  first:self-end md:order-1 md:mb-0 md:py-32 lg:mb-0 ${addedClass}`}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="my-16 pb-14 text-justify font-barlow text-base leading-[30px] first:mb-0 md:w-[491px] md:text-xl">
          {text}
        </p>
        <ButtonRefactor text="Visit Now" />
      </div>
    </div>
  );
}
