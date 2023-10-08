'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function AccelerationServices() {
  const [expanded, setExpanded] = useState(false);

  const services = [
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
    {
      title: 'Pitch deck preparation',
      image: 'cfda12787359d605ef7a3b3d9993e1b7.png',
    },
  ];

  const displayedServices = expanded ? services : services.slice(0, 5);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 mt-8 border-b-2 pb-14">
      {displayedServices.map((service) => (
        <div
          className="md:w-[343px] h-[115px] text-[#2B2115] overflow-hidden font-barlow text-xl rounded-sm bg-[#F7F3EE] flex justify-center items-center relative"
          key={service.title}
        >
          <span>{service.title}</span>
          <Image
            className="absolute opacity-25 -bottom-8 -left-3"
            src={`/static/images/acceleration/${service.image}`}
            alt="forough"
            width={109}
            height={109}
          />
        </div>
      ))}
      <div className="flex mx-auto md:hidden items-center gap-2">
        <span
          className="font-gilda text-center cursor-pointer"
          onClick={toggleExpanded}
        >
          {expanded ? 'See Less' : 'See More'}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'none',
          }}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
}
