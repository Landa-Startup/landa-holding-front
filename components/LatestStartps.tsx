import React from 'react';
import LatestStartupsCard from './LatestStartupsCard';

export default function LatestStartps() {
  return (
    <div>
      <div className="h-[643px] relative bg-stone-100">
        <div className="w-[595px] h-[78px] flex-col justify-start items-start inline-flex">
          <div className="text-neutral-800 text-base font-normal tracking-[5.60px] absolute left-[160px] top-[24px]">
            LANDA HOLDING
          </div>
          <div className="w-[595px] h-[59px] text-[#AA8453] text-[64px] font-normal absolute left-[160px] top-[43px]">
            LASTEST STARTUPS
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-3 gap-4 mt-10">
            <LatestStartupsCard
              image="/static/images/trip.png"
              title="LANDA TRIP"
              description="Landa trip is an innovative start-up company that creates, promotes, and runs useful educational courses for all interested people and businesses."
            />
            <LatestStartupsCard
              image="/static/images/diaco.png"
              title="Diaco"
              description="Diaco is an open innovation platform which acts as an intermediate between technology seekers and providers to fulfill their technological demands."
            />
            <LatestStartupsCard
              image="/static/images/vision raft.png"
              title="VISION RAFT"
              description="This is Vision Raft, a VR platform focused on education and entertainment of the young ones which acts to enhance their learning quality."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
