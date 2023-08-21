import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../atoms/Button';

export default function Hero({
  showLanda,
  titles,
  subTitle,
  buttonBg,
  backgroundImage,
  leftImage,
  showButton,
}: {
  showLanda: boolean;
  titles: string[] | string;
  subTitle: string;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[230px] md:h-[740px] relative"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-5">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center text-white text-xl md:text-3xl font-normal tracking-[5px] md:tracking-[11.20px] font-condensed`}
        >
          Landa Holding
        </div>
        {/* {titles.map((title) => (
          <div
            key={title}
            className="font-gilda text-right text-neutral-50 text-opacity-95 text-2xl md:text-6xl font-normal tracking-[2.4px] md:tracking-[6.40px]"
          >
            {title}
            <br />
          </div>
        ))} */}

        <div className="font-gilda text-right text-neutral-50 text-opacity-95 text-2xl md:text-6xl font-normal tracking-[2.4px] md:tracking-[6.40px]">
          {"Academy"}
          <br />
        </div>

        <div className="hidden md:w-[820px] md:block text-center font-barlow text-neutral-50 text-opacity-95 text-[9.5px] md:text-4xl font-normal leading-3 md:leading-10 md:tracking-[2px]">
          {subTitle}
        </div>
        <div className="md:hidden text-center w-[250px] font-condensed text-neutral-50 text-[12px] md:text-4xl font-normal leading-3 md:leading-10 md:tracking-[2px]">
          Landa Holding is an international investment company active in Iran
          and Canada.
        </div>
        {showButton ? (
          <Button
            text="Register Now"
            size="notVisit"
            bgColor={buttonBg}
            addedClass={buttonBg ? 'md:hidden' : 'block'}
          />
        ) : (
          <></>
        )}
        <Image
          className="w-[103px] md:w-[412px] h-[140px] md:h-[560px] absolute right-0 bottom-0"
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
        <Link
          className="absolute flex items-center justify-center w-7 h-7 md:w-12 h-w-5 md:h-12 border border-white rounded-full animate-bounce left-10 bottom-4"
          href={'#LandaHolding'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="text-white bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
