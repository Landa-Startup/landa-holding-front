import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="w-[1440px] h-[644px] relative bg-neutral-50">
      <div className="w-[598px] h-[644px] left-[761px] top-0 absolute">
        <div className="left-[51px] top-[67px] absolute flex-col justify-center items-center gap-10 inline-flex">
          <Image
            className="w-16 h-[95px]"
            src="https://via.placeholder.com/64x95"
            alt='testalt'
            width={500}
            height={500}
          />
          <img
            className="w-[98px] h-[99px]"
            src="https://via.placeholder.com/98x99"
          />
          <div className="w-[94px] h-[99px] relative">
            <div className="w-[103.23px] h-[123.49px] left-[-15.53px] top-[95.44px] absolute"></div>
          </div>
          <div className="w-24 h-[97px] relative">
            <div className="w-[96.35px] h-[97px] left-[-0.36px] top-[-0px] absolute"></div>
          </div>
        </div>
        <div className="left-[449px] top-[67px] absolute flex-col justify-center items-center gap-10 inline-flex">
          <div className="w-[94px] h-[99px] relative">
            <div className="w-[103.23px] h-[123.49px] left-[-15.53px] top-[95.44px] absolute"></div>
          </div>
          <div className="w-24 h-[97px] relative">
            <div className="w-[96.35px] h-[97px] left-[-0.36px] top-[-0px] absolute"></div>
          </div>
          <img
            className="w-[98px] h-[99px]"
            src="https://via.placeholder.com/98x99"
          />
          <img
            className="w-16 h-[95px]"
            src="https://via.placeholder.com/64x95"
          />
        </div>
        <div className="left-[255px] top-[67px] absolute flex-col justify-center items-center gap-10 inline-flex">
          <div className="w-24 h-[97px] relative">
            <div className="w-[96.35px] h-[97px] left-[-0.36px] top-[-0px] absolute"></div>
          </div>
          <div className="w-[94px] h-[99px] relative">
            <div className="w-[103.23px] h-[123.49px] left-[-15.53px] top-[95.44px] absolute"></div>
          </div>
          <img
            className="w-16 h-[95px]"
            src="https://via.placeholder.com/64x95"
          />
          <img
            className="w-[98px] h-[99px]"
            src="https://via.placeholder.com/98x99"
          />
        </div>
        <div className="w-[598px] h-[644px] left-0 top-0 absolute bg-gradient-to-b from-neutral-50 via-neutral-50 to-neutral-50" />
      </div>
      <div className="w-[415px] h-[476px] left-[163px] top-[80px] absolute border">
        <div className="w-[333px] h-[45px] pl-3.5 pr-[236px] pt-3 pb-[11px] left-[41px] top-[79px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex">
          <div className="w-[83px] h-[22px] relative">
            <div className="left-0 top-[3px] absolute text-neutral-500 text-base font-normal">
              Your Name
            </div>
            <div className="left-[76px] top-0 absolute text-stone-500 text-base font-normal">
              *
            </div>
          </div>
        </div>
        <div className="w-[333px] h-[47px] pl-3.5 pr-[236px] pt-3 pb-[13px] left-[41px] top-[153px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex">
          <div className="w-[83px] h-[22px] relative">
            <div className="left-0 top-[3px] absolute text-neutral-500 text-base font-normal">
              Your Email
            </div>
            <div className="left-[76px] top-0 absolute text-stone-500 text-base font-normal">
              *
            </div>
          </div>
        </div>
        <div className="w-[333px] h-[110px] pl-3.5 pr-[251px] pt-3 pb-[76px] left-[41px] top-[229px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex">
          <div className="w-[68px] h-[22px] relative">
            <div className="left-0 top-[3px] absolute text-neutral-500 text-base font-normal">
              Massage
            </div>
            <div className="left-[61px] top-0 absolute text-stone-500 text-base font-normal">
              *
            </div>
          </div>
        </div>
        <div className="w-[180px] h-[50px] left-[116px] top-[395px] absolute">
          <div className="w-[180px] h-[50px] left-0 top-0 absolute bg-stone-500" />
          <div className="w-28 h-5 left-[34px] top-[14px] absolute text-center text-white text-xl font-medium">
            Send Massage
          </div>
        </div>
        <div className="h-[51px] left-[77px] top-0 absolute text-center text-neutral-800 text-[32px] font-medium tracking-[11.20px]">
          CONTACT US
        </div>
      </div>
    </div>
  );
}
