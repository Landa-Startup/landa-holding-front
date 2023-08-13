import Image from 'next/image';
import React from 'react';

export default function AerialViewBusinessTeam() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Cooperation-members/Office.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[598px]"
    >
      <div className="py-5 text-center font-condensed">
        <span className="text-white text-xl font-normal tracking-[7px]">
          Landa Holding
          <br />
        </span>
        <span className="text-white text-base md:text-[40px] font-normal">
          What Our Cooperation Members Say?
        </span>
      </div>
      <div className="md:w-9/12 md:mx-auto mx-10 p-5 flex flex-col items-center bg-neutral-500 bg-opacity-60 w-96">
        <div className="flex md:flex-col md:items-center w-96 md:w-full">
          {' '}
          <div className="relative md:ml-20 md:self-start justify-start items-center gap-[13px] flex flex-col w-1/3">
            {/* TODO: image should go to this address: /static/images/home/business-team/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg */}
            <Image
              className="w-[108px] h-[104px] border"
              src="/static/images/Home/Cooperation-members/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg"
              width={500}
              height={500}
              alt="Avatar"
            />
            <div className="md:hidden w-[220px] h-0 left-[118px] top-[225px] absolute origin-top-left -rotate-90 bg-white border border-white"></div>
            <div className="flex-col justify-center items-start gap-[3px]">
              <div className=" text-white text-xl font-medium font-barlow">
                Morteza Jafari
              </div>
              <div className=" text-white text-base font-normal font-barlow">
                Founder of IRimmigration
              </div>
              <div className=" text-white text-[15px] font-normal font-gilda">
                Investor
              </div>
            </div>
          </div>
          <div className="p-2.5 justify-center items-center gap-2.5 inline-flex w-2/3">
            <div className="text-stone-100 text-xs md:text-xl font-medium leading-relaxed md:leading-7 font-barlow">
              Landa Holding provides comprehensive information on investment
              strategies, business creation, and entrepreneurial methods. Its
              informative approaches in various economic and managerial fields
              assist {"Landa's"} followers in gaining a deeper understanding of
              concepts and principles related to investment and
              entrepreneurship.
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[19px] inline-flex">
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-primary rounded-full" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
        </div>
        <div className="w-[283.01px] h-[0px]border border-white"></div>
      </div>
    </div>
  );
}
