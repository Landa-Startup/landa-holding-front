import React from 'react';

export default function UpcomingEvents() {
  return (
    <div className="h-[480px] relative bg-stone-100">
      <div className="left-[185px] top-[29px] absolute text-neutral-800 text-[40px] font-normal">
        UPCOMING EVENT
      </div>
      {/* TODO: create commponent for show repeated parts. because codes are almost same and just written few times */}
      <div className="pr-[53px] left-[174px] top-[118px] absolute flex-col justify-center items-start gap-[18px] inline-flex">
        <div className="self-stretch items-center gap-[625px] inline-flex justify-between">
          <div className="justify-start items-center gap-[69px] flex">
            <div className="px-8 flex-col justify-start items-center inline-flex">
              <div className="text-right text-[#AA8453] text-[40px] font-medium">
                08
              </div>
              <div className="text-right text-[#AA8453] text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-right text-neutral-800 text-3xl font-medium">
                Investment
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-[42px] px-[50px] py-1 bg-[#AA8453] flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium">REGISTER</div>
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-[650px] inline-flex">
          <div className="w-[307px] justify-start items-start gap-[69px] flex">
            <div className="px-8 flex-col justify-start items-center inline-flex">
              <div className="text-right text-[#AA8453] text-[40px] font-medium">
                08
              </div>
              <div className="text-right text-[#AA8453] text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-right text-neutral-800 text-3xl font-medium">
                Entrepreneur
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-[42px] px-[50px] py-1 bg-[#AA8453] flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium">REGISTER</div>
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-[628px] inline-flex">
          <div className="justify-start items-center gap-[69px] flex">
            <div className="px-8 flex-col justify-start items-center inline-flex">
              <div className="text-right text-[#AA8453] text-[40px] font-medium">
                08
              </div>
              <div className="text-right text-[#AA8453] text-3xl font-medium">
                oct
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-right text-neutral-800 text-3xl font-medium">
                Investment
              </div>
              <div className="text-neutral-400 text-base font-normal tracking-widest">
                MONDAY/ 2022
              </div>
            </div>
          </div>
          <div className="h-[42px] px-[50px] py-1 bg-[#AA8453] flex-col justify-between items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-medium">REGISTER</div>
          </div>
        </div>
      </div>
      <div className="w-16 h-[313.88px] left-[121px] top-[52px] absolute">
        <div className="w-[360px] h-[0px] left-0 top-[360px] absolute origin-top-left -rotate-90 bg-neutral-800 border border-neutral-800"></div>
        <div className="w-[55px] h-[0px] left-0 top-[103.03px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-[55px] h-[0px] left-0 top-[360px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-[55px] h-[0px] left-0 top-[0px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-[55px] h-[0px] left-0 top-[198.51px] absolute bg-neutral-800 border border-neutral-800"></div>
        <div className="w-[11px] h-[11px] left-[50px] top-[97px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-[11px] h-[11px] left-[53px] top-[194px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
        <div className="w-[11px] h-[11px] left-[53px] top-[355px] absolute bg-neutral-800 rounded-full border border-neutral-800" />
      </div>
    </div>
  );
}
