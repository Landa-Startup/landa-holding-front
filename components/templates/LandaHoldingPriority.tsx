import React from 'react';
import LandaHoldingPriorityCard from '../atoms/cards/LandaHoldingPriorityCard';
import Image from 'next/image';

export default function LandaHoldingPriority() {
  const cardData = [
    {
      title: 'Platform based on AI and VR',
      image: '/static/images/Home/Priority/vr-glasses 2.png',
    },
    {
      title: 'Agriculture',
      image: '/static/images/Home/Priority/system 2.png',
    },
    {
      title: 'Renewable Energy',
      image: '/static/images/Home/Priority/online-shop 1.png',
    },
    {
      title: 'The Environment',
      image: '/static/images/Home/Priority/planet-earth 1.png',
    },
    {
      title: 'Entertainment',
      image: '/static/images/Home/Priority/ai 2.png',
    },
    {
      title: 'Biomedical Engineering',
      image: '/static/images/Home/Priority/man 2.png',
    },
    {
      title: 'Services for Teenagers',
      image: '/static/images/Home/Priority/process 2.png',
    },
    {
      title: 'Tourism services',
      image: '/static/images/Home/Priority/world 2.png',
    },
  ];

  return (
    <div className="w-full h-[613px] px-28 pt-16 pb-20 bg-white flex-col justify-start items-start gap-9 inline-flex">
      <div>
        <span className="text-black text-base font-normal tracking-[5.60px] font-condensed">
          Landa Holding
          <br />
        </span>
        <span className="text-4xl font-normal tracking-widest text-black font-condensed">
          Priority
        </span>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-5 place-items-center">
          {cardData.map((data, index) => (
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