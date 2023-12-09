'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ButtonRefactor from '../common/ButtonRefactor';

export default function Hero({
  showLanda,
  titles,
  subTitle,
  backgroundImage,
  leftImage,
  showButton,
  title
}: {
  showLanda: boolean;
  titles: string[] | string;
  subTitle?: string;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
  lang: string;
  title: string;
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isTitleChanging, setIsTitleChanging] = useState(false); // Track if the title is changing
  const [notArray, setNotArray] = useState(false);

  // async function langMaker(lang: string) {
  //   const { t } = await useTranslation(lang, "mainPage")

  //   return t
  // }

  // const t = langMaker(lang);

  useEffect(() => {
    if (Array.isArray(titles)) {
      const interval = setInterval(() => {
        setIsTitleChanging(true); // Start the animation
        setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    } else {
      setCurrentTitle(titles);
      setIsTitleChanging(false);
      setNotArray(true);
    }
  }, [titles]);

  useEffect(() => {
    if (Array.isArray(titles)) {
      setCurrentTitle(titles[titleIndex]);
    } else {
      setCurrentTitle(titles);
      setNotArray(true);
    }
  }, [titleIndex, titles]);

  useEffect(() => {
    if (Array.isArray(titles)) {
      setIsTitleChanging(false);
    }
  }, [currentTitle]);

  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPositionX: '65%'
      }}
      data-bgset={`/static/images/Home/Hero/${backgroundImage} [(max-width: 640px)] | /static/images/Home/Hero/${backgroundImage}`}
      className="relative h-[calc(100vh)] overflow-hidden md:h-screen"
    >
      <div className="flex flex-col items-center justify-center space-y-7 py-36 md:h-screen md:space-y-8">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center font-barlow text-3xl font-bold text-white ltr:tracking-[12.6px] md:text-4xl`}
        >
          {title}
        </div>
        <div
          className={`${
            notArray
              ? 'text-center font-gilda text-5xl text-black md:text-right md:text-7xl'
              : 'text-center font-gilda text-5xl font-normal text-neutral-50 text-opacity-95 ltr:tracking-[6.4px] md:text-right md:text-7xl'
          } ${
            isTitleChanging
              ? 'zoom-in-animation title-transition transition-opacity duration-[2500]'
              : ''
          }`}
          style={{ opacity: isTitleChanging ? 0 : 1 }} // Set opacity based on isTitleChanging
        >
          {currentTitle}
        </div>

        <div
          className={`text-center font-barlow text-3xl font-semibold leading-10 text-white text-opacity-95 ltr:tracking-[4px] md:text-4xl`}
        >
          {subTitle ? subTitle : ''}
        </div>
        {showButton ? (
          // <Button
          //   text="Register Now"
          //   size="notVisit"
          //   goto="/"
          //   lang={lang}
          // />
          <ButtonRefactor text="Register Now" />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="absolute -right-16 bottom-0 mr-0 h-[300px] w-[300px]  sm:h-[302px] sm:w-[305px] md:right-0 md:mr-0 md:h-[372px] md:w-[265px] xl:h-[560px] xl:w-[420px] "
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
