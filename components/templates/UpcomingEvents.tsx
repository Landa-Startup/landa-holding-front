import React from 'react';
import Button from '../atoms/Button';

export default function UpcomingEvents() {
  return (
    <div className="h-[480px] relative bg-stone-100">
      <div className="left-[185px] top-[29px] absolute text-neutral-800 text-4xl font-normal font-gilda">
        UPCOMING EVENT
      </div>
      <div className="pr-[53px] left-[174px] top-[118px] absolute flex-col justify-center items-start gap-[18px] inline-flex">
        <div className="self-stretch justify-start items-center gap-[680px] inline-flex">
          <div className="justify-start items-center gap-[55px] flex">
            <div className="inline-flex flex-col items-center justify-start px-8">
              <div className="text-right text-primary text-[40px] font-medium">
                08
              </div>
              <div className="text-3xl font-medium text-right text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 font-condensed">
              <div className="text-3xl font-medium text-right text-neutral-800">
                Investment
              </div>
              <div className="text-base font-normal tracking-widest text-neutral-400 font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <Button text="Register" size="register" />
        </div>
        <div className="self-stretch justify-start items-center gap-[650px] inline-flex">
          <div className="w-[307px] justify-start items-start gap-16 flex">
            <div className="inline-flex flex-col items-center justify-start px-8 font-condensed">
              <div className="text-4xl font-medium text-right text-primary">
                08
              </div>
              <div className="text-3xl font-medium text-right text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="text-3xl font-medium text-right text-neutral-800 font-condensed">
                Entrepreneur
              </div>
              <div className="text-base font-normal tracking-widest text-neutral-400 font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <Button text="Register" size="register" />
        </div>
        <div className="self-stretch justify-start items-center gap-[680px] inline-flex">
          <div className="flex items-center justify-start gap-16">
            <div className="inline-flex flex-col items-center justify-start px-8 font-condensed">
              <div className="text-right text-primary text-[40px] font-medium">
                08
              </div>
              <div className="text-3xl font-medium text-right text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="text-3xl font-medium text-right text-neutral-800 font-condensed">
                Investment
              </div>
              <div className="text-base font-normal tracking-widest text-neutral-400 font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <Button text="Register" size="register" />
        </div>
      </div>
      <div className="w-16 h-[313.88px] left-[121px] top-[52px] absolute">
        <div className="w-[306px] h-0 left-0 top-[307px] absolute origin-top-left -rotate-90 bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[103.03px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[305px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="absolute top-0 left-0 h-0 border w-14 bg-neutral-800 border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[198.51px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-3 h-3 left-14 top-[97px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-3 h-3 left-14 top-[194px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-3 h-3 left-14 top-[300px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
      </div>
    </div>
  );
}