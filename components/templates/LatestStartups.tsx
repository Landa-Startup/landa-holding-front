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
  ];

  return (
    <div>
      <div className="flex flex-col p-5 bg-stone-100 items-center text-center">
        <div className="flex-col justify-start items-start md:ml-32 md:self-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-neutral-800 text-sm md:text-base font-normal tracking-[5.60px] font-condensed">
              LANDA HOLDING
            </div>
            <div className="text-primary text-5xl md:text-[64px] font-normal font-condensed">
              LATEST STARTUPS
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
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
