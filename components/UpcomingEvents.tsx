import React from 'react';

export default function UpcomingEvents() {
  return (
    // TODO: Ask from ariana about ui in mobile.
    <div className="h-[480px] relative bg-stone-100">
      <div className="left-[185px] top-[29px] absolute text-neutral-800 text-4xl font-normal font-gilda">
        UPCOMING EVENT
      </div>
      <div className="pr-14 left-[174px] top-[118px] absolute flex-col justify-center items-start gap-5 inline-flex">
        <div className="self-stretch items-center gap-[625px] inline-flex justify-between">
          <div className="justify-start items-center gap-16 flex">
            <div className="px-8 flex-col justify-start items-center inline-flex font-condensed">
              <div className="text-right text-primary text-4xl font-medium">
                08
              </div>
              <div className="text-right text-primary text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex font-condensed">
              <div className="text-right text-neutral-800 text-3xl font-medium">
                Investment
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-11 px-14 py-1 bg-primary flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium font-condensed">
              REGISTER
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-[650px] inline-flex">
          <div className="w-[307px] justify-start items-start gap-16 flex">
            <div className="px-8 flex-col justify-start items-center inline-flex font-condensed">
              <div className="text-right text-primary text-4xl font-medium">
                08
              </div>
              <div className="text-right text-primary text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-right text-neutral-800 text-3xl font-medium font-condensed">
                Entrepreneur
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-11 px-12 py-1 bg-primary flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium font-condensed">
              REGISTER
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-[672px] inline-flex">
          <div className="justify-start items-center gap-16 flex">
            <div className="px-8 flex-col justify-start items-center inline-flex font-condensed">
              <div className="text-right text-primary text-[40px] font-medium">
                08
              </div>
              <div className="text-right text-primary text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-right text-neutral-800 text-3xl font-medium font-condensed">
                Investment
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest font-condensed">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-11 px-14 py-1 bg-primary flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium font-condensed">
              REGISTER
            </div>
          </div>
        </div>
      </div>
      <div className="w-16 h-[313.88px] left-[121px] top-[52px] absolute">
        <div className="w-[360px] h-0 left-0 top-[360px] absolute origin-top-left -rotate-90 bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[103.03px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[360px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-0 absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-14 h-0 left-0 top-[198.51px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-3 h-3 left-14 top-[97px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-3 h-3 left-14 top-[194px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-3 h-3 left-14 top-[355px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
      </div>
    </div>
  );
}
