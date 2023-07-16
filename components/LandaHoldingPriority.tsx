import React from 'react';
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import Image from 'next/image';

export default function LandaHoldingPriority({ title }: { title: string }) {
  return (
    <div className="w-[1440px] h-[613px] px-[120px] pt-[66px] pb-[78px] bg-white flex-col justify-start items-start gap-[35px] inline-flex">
      <div>
        <span className="text-black text-base font-normal tracking-[5.60px]">
          OUR SERVICES
          <br />
        </span>
        <span className="text-black text-[40px] font-normal tracking-widest">
          Landa Holding Priority
        </span>
      </div>
      <div className="self-stretch justify-start items-start gap-6 flex flex-row">
        <div className="w-[361px] h-[168px] relative border border-stone-500">
          <LandaHoldingPriorityCard
            title="Platform based on AI and VR"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Agriculture"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Renewable Energy"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="The Environment"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Entertainment"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Biomedical Engineering"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Services for Teenagers"
            image="https://via.placeholder.com/60x60"
          />
          <LandaHoldingPriorityCard
            title="Tourism services"
            image="https://via.placeholder.com/60x60"
          />
        </div>
      </div>
    </div>
  );
}
