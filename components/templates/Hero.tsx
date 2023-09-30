'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
  titles: string[];
  subTitle: string;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isTitleChanging, setIsTitleChanging] = useState(false); // Track if the title is changing

  useEffect(() => {
    if (Array.isArray(titles)) {
      const interval = setInterval(() => {
        setIsTitleChanging(true); // Start the animation
        setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 500); // Delay the title change slightly to allow animation
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [titles]);

  useEffect(() => {
    if (Array.isArray(titles)) {
      setCurrentTitle(titles[titleIndex]);
    }
  }, [titleIndex, titles]);

  useEffect(() => {
    // Reset the animation flag when the title changes
    setIsTitleChanging(false);
  }, [currentTitle]);

  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundSize: 'cover',
      }}
      className="h-[calc(100vh-4rem)] md:h-screen relative overflow-hidden brightness-75"
    >
      <div  className="flex flex-col items-center justify-center md:h-screen space-y-5 py-36">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center text-white text-xl md:tracking-[11.20px] font-condensed font-normal tracking-[7px]`}
        >
          Landa Holding
        </div>
        <div
          className={`md:text-right text-neutral-50 md:text-6xl font-normal tracking-widest font-gilda text-center text-opacity-95 text-2xl ${
            isTitleChanging
              ? 'zoom-in-animation transition-opacity duration-[2500] title-transition'
              : '' // Apply spin animation class when the title is changing
          }`}
          style={{ opacity: isTitleChanging ? 0 : 1 }} // Set opacity based on isTitleChanging
        >
          {currentTitle}
        </div>

        <div className="text-center font-barlow text-white text-opacity-95 text-4xl font-semibold leading-10 tracking-[2px]">
          {subTitle}
        </div>
        {/* <div className="hidden md:block text-center w-[300px] font-barlow text-neutral-50 text-[20px] md:text-4xl font-normal leading-8 md:leading-10 md:tracking-[2px]">
          Landa Holding is an international investment company active in Iran
          and Canada.
        </div> */}
        {showButton ? (
          <Button
            text="Register Now"
            size="notVisit"
            // bgColor={buttonBg}
            addedClass={buttonBg ? 'md:hidden' : 'block'}
            goto="/"
          />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="w-[305px] mr-4 md:mr-0  md:w-[265px] md:h-[372px] h-[420px] xl:h-[560px] xl:w-[420px]   absolute -right-16 md:right-0 bottom-0 "
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
        {/* <Link
          aria-label="Scroll To Next Section"
          className="absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white rounded-full animate-bounce left-7 md:left-10 bottom-4"
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
        </Link> */}
      </div>
    </div>
  );
}
