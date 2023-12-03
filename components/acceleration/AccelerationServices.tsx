'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ArrowDown from '../icons/acceleration/ArrowDown';

import { ServicesInterface } from '../../types/global'

export default function AccelerationServices(
  {services} : {services : ServicesInterface[]}
) {
  const [expanded, setExpanded] = useState(true);

  const displayedServices = expanded ? services : services.slice(0, 6);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 border-b-2 pb-14 md:grid-cols-3 md:gap-11">
      {services.map((service) => (
        <div
          className="relative flex h-[115px] items-center justify-center overflow-hidden rounded-sm bg-[#F7F3EE] font-barlow text-xl text-[#2B2115] md:w-[343px]"
          key={service.title}
        >
          <span>{service.title}</span>
          <Image
            className="absolute -bottom-8 -left-3 opacity-25"
            src={`/static/images/acceleration/${service.image}`}
            alt="forough"
            width={109}
            height={109}
          />
        </div>
      ))}
      {/* <div className="flex mx-auto items-center gap-2">
        <span
          className="font-gilda text-center cursor-pointer"
          onClick={toggleExpanded}
        >
          {expanded ? 'See Less' : 'See More'}
        </span>
        <ArrowDown />
      </div> */}
    </div>
  );
}
