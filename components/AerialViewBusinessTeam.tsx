import Image from 'next/image';
import React from 'react';

export default function AerialViewBusinessTeam() {
  return (
    <div
      style={{ backgroundImage: "url('/static/images/Office.png')" }}
      className="w-[1440px] h-[598px] bg-black bg-opacity-40 backdrop-blur-[10px]"
    >
      <div className="text-center py-5">
        <span className="text-white text-xl font-normal tracking-[7px]">
          Landa Holding
          <br />
        </span>
        <span className="text-white text-[40px] font-normal">
          What Our Cooperation Members Say?
        </span>
      </div>
      <div className="w-[1006px] h-[380px] relative bg-neutral-500 bg-opacity-60 mx-auto">
        <div className="left-[416px] top-[316px] absolute justify-start items-start gap-[19px] inline-flex">
          <div className="w-[15px] h-[15px] bg-stone-500 rounded-full" />
          <div className="w-[15px] h-[15px] rounded-full border border-white" />
          <div className="w-[15px] h-[15px] rounded-full border border-white" />
          <div className="w-[15px] h-[15px] rounded-full border border-white" />
        </div>
        <div className="w-[794px] p-2.5 left-[78px] top-[147px] absolute justify-center items-center gap-2.5 inline-flex">
          <div className="w-[722px] text-stone-100 text-xl font-medium leading-7">
            Landa Holding provides comprehensive information on investment
            strategies, business creation, and entrepreneurial methods. Its
            informative approaches in various economic and managerial fields
            assist {"Landa's"} followers in gaining a deeper understanding of
            concepts and principles related to investment and entrepreneurship.
          </div>
        </div>
        <div className="left-[66px] top-[23px] absolute justify-start items-center gap-[13px] inline-flex">
          <Image
            className="w-[108px] h-[104px] border"
            src="https://via.placeholder.com/108x104"
            width={500}
            height={500}
            alt='Avatar'
          />
          <div className="h-[42px] flex-col justify-center items-start gap-[3px] inline-flex">
            <div className=" h-[21px] text-white text-xl font-medium">
              Morteza Jafari
            </div>
            <div className=" h-[18px] text-white text-base font-normal">
              Founder of IRimmigration
            </div>
            <div className="h-[18px] text-white text-[15px] font-normal">
              Investor
            </div>
          </div>
        </div>
        <div className="w-[283.01px] h-[0px] left-[66px] top-[145px] absolute border border-white"></div>
      </div>
    </div>
  );
}
