import React from 'react';
import CopyRight from './CopyRight';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className="h-[381px] relative bg-neutral-800 font-barlow">
        <div className="w-full h-[0px] left-0 top-[341px] absolute border border-white"></div>
        <CopyRight />
        <div className="left-[172px] top-[68px] absolute justify-start items-start gap-[84px] inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[25px] text-justify text-white text-xl font-medium">
              About Landa
              <br />
            </div>
            <div className="w-[344px] text-justify text-neutral-400 text-base font-normal">
              In Landa Academy, individuals will be trained based on their
              interests and capabilities. Necessary actions are taken at the
              Landa Acceleration Center to accelerate their unique abilities.
              Then, investment is made based on the investment priorities of
              developing the nurtured capabilities of individuals.
              <br />
            </div>
            <div className="w-[126px] h-[22px] flex flex-row">
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/aa99d9333028a3e533d91d20dbd6b9a8.png"
                alt="social"
                width={50}
                height={50}
              />
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/5080b1e2fa01acd810ef0bba4824f40b.png"
                alt="social"
                width={50}
                height={50}
              />
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/f70234cc786c7b06e04167b970124d28.png"
                alt="social"
                width={50}
                height={50}
              />
              <Image
                className="w-5 h-5"
                src="/static/images/e8564f775d3908177afc07583d4b2a33.png"
                alt="social"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[67px] h-[30px] text-justify text-white text-xl font-medium">
              Explore
              <br />
            </div>
            <div className="flex-col justify-center items-center gap-2 flex">
              <div className="text-neutral-400 text-base font-normal">Home</div>
              <div className="text-neutral-400 text-base font-normal">
                About
              </div>
              <div className="text-neutral-400 text-base font-normal">
                Contact
              </div>
            </div>
          </div>
          <div className="pb-3 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-white text-xl font-medium">Forms</div>
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-neutral-400 text-base font-normal">
                Startups
              </div>
              <div className="text-neutral-400 text-base font-normal">
                Center of Investor
              </div>
              <div className="text-neutral-400 text-base font-normal">
                Center of Entrepreneurs
              </div>
              <div className="text-neutral-400 text-base font-normal">
                Our business partners
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[93px] h-[30px] text-justify text-white text-xl font-medium">
              Contact
              <br />
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              Young street, Toronto, Canada
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              +1 (416) 557-7622
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              Eastern Daneshvar street, Tehran, Iran
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              02188030167
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              Saadat Abad Ave, Isfahan, Iran
            </div>
            <div className="text-justify text-neutral-400 text-base font-normal">
              03131311914
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
