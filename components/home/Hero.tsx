'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

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
        }, 500);
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
    setIsTitleChanging(false);
  }, [currentTitle]);

  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPositionX: '65%',
      }}
      data-bgset={`/static/images/Home/Hero/${backgroundImage} [(max-width: 640px)] | /static/images/Home/Hero/${backgroundImage}`}
      className="h-[calc(100vh)] md:h-screen relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center md:h-screen space-y-7 md:space-y-8 py-36">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center text-white text-3xl md:text-4xl md:tracking-[12.6px] font-barlow font-bold tracking-[7px]`}
        >
          Landa Holding
        </div>
        <div
          className={`md:text-right text-neutral-50 text-5xl md:text-7xl font-normal tracking-[6.4px] font-gilda text-center text-opacity-95 ${
            isTitleChanging
              ? 'zoom-in-animation transition-opacity duration-[2500] title-transition'
              : ''
          }`}
          style={{ opacity: isTitleChanging ? 0 : 1 }} // Set opacity based on isTitleChanging
        >
          {currentTitle}
        </div>

        <div className="text-center font-mono text-white text-opacity-95 text-3xl md:text-4xl font-semibold leading-10 tracking-[4px]">
          {subTitle}
        </div>
        {showButton ? (
          <Button
            text="Register Now"
            size="notVisit"
            addedClass={buttonBg ? 'md:hidden' : 'block'}
            goto="/"
          />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="w-[300px] h-[300px] sm:w-[305px] sm:h-[302px] mr-0 md:mr-0  md:w-[265px] md:h-[372px] xl:h-[560px] xl:w-[420px] absolute -right-16 md:right-0 bottom-0 "
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}