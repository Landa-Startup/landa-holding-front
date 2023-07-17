import React from 'react';
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import Image from 'next/image';

export default function LandaHoldingPriority() {
  return (
    <div className="w-full h-[613px] px-28 pt-[66px] pb-[78px] bg-white flex-col justify-start items-start gap-[35px] inline-flex">
      <div>
        <span className="text-black text-base font-normal tracking-[5.60px]">
          Landa Holding
          <br />
        </span>
        <span className="text-black text-[40px] font-normal tracking-widest">
          Priority
        </span>
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-5 place-items-center w-[1295px]">
          <LandaHoldingPriorityCard
            title="Platform based on AI and VR"
            image="/static/images/vr-glasses 2.png"
          />
          <LandaHoldingPriorityCard
            title="Agriculture"
            image="/static/images/system 2.png"
          />
          <LandaHoldingPriorityCard
            title="Renewable Energy"
            image="/static/images/online-shop 1.png"
          />
          <LandaHoldingPriorityCard
            title="The Environment"
            image="/static/images/planet-earth 1.png"
          />
          <LandaHoldingPriorityCard
            title="Entertainment"
            image="/static/images/ai 2.png"
          />
          <LandaHoldingPriorityCard
            title="Biomedical Engineering"
            image="/static/images/man 2.png"
          />
          <LandaHoldingPriorityCard
            title="Services for Teenagers"
            image="/static/images/process 2.png"
          />
          <LandaHoldingPriorityCard
            title="Tourism services"
            image="/static/images/world 2.png"
          />
        </div>
      </div>
    </div>
  );
}
