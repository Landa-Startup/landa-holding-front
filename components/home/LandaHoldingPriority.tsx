import React from 'react';
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import Image from 'next/image';
import { cardData1 } from '../../app/[lang]/statics';

export default function LandaHoldingPriority() {

  return (
    <div className="w-full xl:h-[613px] py-10 bg-white flex-col justify-start items-center relative gap-9 inline-flex ">
      <div className="ml-5 xl:ml-40 lg:self-start flex flex-col items-center">
        <span className="text-black text-base font-normal tracking-[5.60px] font-condensed">
          Landa Holding
          <br />
        </span>
        <span className="text-5xl font-normal tracking-widest text-black font-condensed ">
          Priorities
        </span>
      </div>
      <div>
        <div className="grid grid-cols-2  gap-5 xl:grid-cols-4  place-items-center mx-5 md:grid-cols-2 lg:grid-cols-2 ">
          {cardData1.map((data, index) => (
            <LandaHoldingPriorityCard
              key={index}
              title={data.title}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
