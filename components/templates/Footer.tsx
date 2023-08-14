import React from 'react';
import CopyRight from '../molecules/CopyRight';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  function GetYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="flex flex-col bg-neutral-800 font-barlow p-10">
      <div className="grid md:grid-cols-4 space-y-5 md:p-20">
        <div className="col-span-1 flex flex-col">
          <div className="h-[25px] text-justify text-white text-xl font-medium">
            About Landa
            <br />
          </div>
          <div className="w-[344px] text-justify text-neutral-400 text-base font-normal mt-1">
            In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals.
            <br />
          </div>
          <div className="w-[126px] h-[22px] flex flex-row justify-center mt-2">
            <Link href={'/'}>
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/aa99d9333028a3e533d91d20dbd6b9a8.png"
                alt="social"
                width={50}
                height={50}
              />
            </Link>
            <Link href={'/'}>
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/5080b1e2fa01acd810ef0bba4824f40b.png"
                alt="social"
                width={50}
                height={50}
              />
            </Link>
            <Link href={'/'}>
              <Image
                className="w-5 h-5 mr-3"
                src="/static/images/f70234cc786c7b06e04167b970124d28.png"
                alt="social"
                width={50}
                height={50}
              />
            </Link>
            <Link href={'/'}>
              <Image
                className="w-5 h-5"
                src="/static/images/e8564f775d3908177afc07583d4b2a33.png"
                alt="social"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-justify text-white text-xl font-medium">
            Explore
            <br />
          </div>
          <div className="flex flex-col">
            <Link
              href={'/'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Home
            </Link>
            <Link
              href={'/about'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              About
            </Link>
            <Link
              href={'/contact'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-white text-xl font-medium">Forms</div>
          <div className="self-stretch flex-col justify-start items-start  inline-flex">
            <Link
              href={'/startups'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Startups
            </Link>
            <Link
              href={'/'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Center of Investor
            </Link>
            <Link
              href={'/'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Center of Entrepreneurs
            </Link>
            <Link
              href={'/'}
              className="text-neutral-400 text-base font-normal hover:text-primary max-w-fit"
            >
              Our business partners
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 tracking-[2px]">
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
      <div className="self-stretch text-center pt-4 border-t">
        © Copyright {GetYear()} by{' '}
        <Link href={'/'} className="text-primary">
          LandaHolding
        </Link>
      </div>
    </div>
  );
}
