import React from 'react';
import LandaMagazineCard from './LandaMagazineCard';

export default function LandaMagazine() {
  return (
    <div>
      <div className="w-[1440px] h-[884px] relative bg-neutral-800">
    <div className="w-[1362px] h-[666px] left-[38px] top-[73px] absolute">
        <img className="w-[391px] h-[476px] left-[81px] top-[141px] absolute shadow" src="https://via.placeholder.com/391x476" />
        <img className="w-[391px] h-[476px] left-[486px] top-[141px] absolute shadow" src="https://via.placeholder.com/391x476" />
        <img className="w-[391px] h-[476px] left-[1282px] top-[141px] absolute origin-top-left rotate-180 shadow" src="https://via.placeholder.com/391x476" />
        <div className="w-[613px] left-[76px] top-0 absolute text-white text-[64px] font-normal">LANDA MAGAZINE</div>
        <div className="w-[302px] h-32 px-[42px] py-[13px] left-[935px] top-[538px] absolute bg-stone-100 flex-col justify-start items-start gap-[7px] inline-flex">
            <div className="w-[114px] text-stone-500 text-base font-normal tracking-[5.60px]">Investment</div>
            <div className="w-[218px] text-black text-[32px] font-normal">Benefits of Spa Treatments</div>
        </div>
        <div className="w-[70px] h-[70px] left-0 top-[344px] absolute shadow justify-start items-start gap-2.5 inline-flex">
            <div className="w-[70px] h-[70px] rounded-full border border-white" />
        </div>
        <div className="w-[70px] h-[70px] left-[1362px] top-[344px] absolute origin-top-left rotate-180 shadow justify-start items-start gap-2.5 inline-flex">
            <div className="w-[70px] h-[70px] rounded-full border border-white" />
        </div>
        <div className="w-[46px] h-[84px] px-1 py-2.5 left-[119px] top-[153px] absolute border border-white flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[31px] h-[17px] text-white text-[15px] font-normal">APR</div>
            <div className="w-[38px] h-8 text-white text-[32px] font-normal">25</div>
        </div>
        <div className="w-[46px] h-[84px] px-1 py-2.5 left-[527px] top-[153px] absolute border border-white flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[31px] h-[17px] text-white text-[15px] font-normal">APR</div>
            <div className="w-[38px] h-8 text-white text-[32px] font-normal">27</div>
        </div>
        <div className="w-[46px] h-[84px] px-1 py-2.5 left-[935px] top-[153px] absolute border border-white flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[31px] h-[17px] text-white text-[15px] font-normal">APR</div>
            <div className="w-[38px] h-8 text-white text-[32px] font-normal">30</div>
        </div>
        <div className="w-[306px] h-32 px-11 py-[13px] left-[119px] top-[538px] absolute bg-stone-100 flex-col justify-start items-start gap-[7px] inline-flex">
            <div className="text-stone-500 text-base font-normal tracking-[5.60px]">Acceleration</div>
            <div className="w-[218px] text-black text-[32px] font-normal">Benefits of Spa Treatments</div>
        </div>
        <div className="w-[297px] h-32 px-[46px] py-[13px] left-[527px] top-[538px] absolute bg-stone-100 flex-col justify-start items-start gap-[7px] inline-flex">
            <div className="w-[114px] text-stone-500 text-base font-normal tracking-[5.60px]">Investment</div>
            <div className="w-[172px] h-[76px] text-black text-[32px] font-normal tracking-[11.20px]">Fitness Center</div>
        </div>
    </div>
    <div className="px-[61px] py-3.5 left-[610px] top-[796px] absolute bg-stone-500 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-2xl font-medium tracking-wide">Read MORE</div>
    </div>
</div>
    </div>
  );
}
