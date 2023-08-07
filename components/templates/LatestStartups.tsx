import React from 'react';
import LatestStartupsCard from '../atoms/cards/LatestStartupsCard';

export default function LatestStartups() {
  const cardData = [
    {
      image: '/static/images/trip.png',
      title: 'LANDA TRIP',
      description:
        'Landa trip is an innovative start-up company that creates, promotes, and runs useful educational courses for all interested people and businesses.',
    },
    {
      image: '/static/images/diaco.png',
      title: 'Diaco',
      description:
        'Diaco is an open innovation platform which acts as an intermediate between technology seekers and providers to fulfill their technological demands.',
    },
    {
      image: '/static/images/vision raft.png',
      title: 'VISION RAFT',
      description:
        'This is Vision Raft, a VR platform focused on education and entertainment of the young ones which acts to enhance their learning quality.',
    },
    // Add more card data objects here if needed
  ];

  return (
    //TODO: put cards in loop.
    <div>
      <div className="h-[643px] relative bg-stone-100">
        <div className="w-[595px] h-[78px] flex-col justify-start items-start inline-flex">
          <div className="text-neutral-800 text-base font-normal tracking-[5.60px] absolute left-[160px] top-[24px] font-condensed">
            LANDA HOLDING
          </div>
          <div className="w-[595px] h-[59px] text-primary text-[64px] font-normal absolute left-[160px] top-[43px] font-condensed">
            LATEST STARTUPS
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-3 gap-4 mt-10">
            {cardData.map((data, index) => (
              <LatestStartupsCard
                key={index}
                title={data.title}
                image={data.image}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
