// 'use client';
import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
import ButtonRefactor from '../common/ButtonRefactor';

export default function Hero({
  showLanda,
  titles,
  subTitle,
  backgroundImage,
  // leftImage,
  showButton,
  title
}: {
  showLanda: boolean;
  titles: string[];
  subTitle?: string;
  buttonBg?: string;
  backgroundImage: string;
  // leftImage: string;
  showButton?: boolean;
  lang: string;
  title: string;
}) {
  // const [titleIndex, setTitleIndex] = useState(0);
  // const [currentTitle, setCurrentTitle] = useState('');
  // const [isTitleChanging, setIsTitleChanging] = useState(false); // Track if the title is changing
  // const [notArray, setNotArray] = useState(false);

  // async function langMaker(lang: string) {
  //   const { t } = await useTranslation(lang, "mainPage")

  //   return t
  // }

  // const t = langMaker(lang);

  // useEffect(() => {
  //   if (Array.isArray(titles)) {
  //     const interval = setInterval(() => {
  //       setIsTitleChanging(true); // Start the animation
  //       setTimeout(() => {
  //         setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  //       }, 500);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   } else {
  //     setCurrentTitle(titles);
  //     setIsTitleChanging(false);
  //     setNotArray(true);
  //   }
  // }, [titles]);

  // useEffect(() => {
  //   if (Array.isArray(titles)) {
  //     setCurrentTitle(titles[titleIndex]);
  //   } else {
  //     setCurrentTitle(titles);
  //     setNotArray(true);
  //   }
  // }, [titleIndex, titles]);

  // useEffect(() => {
  //   if (Array.isArray(titles)) {
  //     setIsTitleChanging(false);
  //   }
  // }, [currentTitle]);

  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-bgset={`/static/images/Home/Hero/${backgroundImage} [(max-width: 640px)] | /static/images/Home/Hero/${backgroundImage}`}
      className="relative h-[calc(100vh)] overflow-hidden md:h-screen"
    >
      <div
        className="absolute inset-0 opacity-70"
        // This div will serve as the overlay
      ></div>

      <div className="relative z-10 mt-48 flex w-fit flex-col justify-center gap-8 md:mx-24 md:justify-start md:ltr:ml-10 ">
        <div
          className={`${
            showLanda ? 'block w-fit' : 'hidden'
          } text-center md:text-center px-2 md:px-0 font-gilda text-3xl font-bold text-white md:text-6xl md:ml-6 md:tracking-[12px] rtl:tracking-normal`}
        >
          {title}
        </div>
        <ul className="mx-12 flex list-disc flex-col gap-4 font-gilda text-xl tracking-wider text-[#FAFAFA] md:text-4xl md:tracking-[3.6px] rtl:tracking-normal md:pt-24">
          {titles.map((title: string, index: number) => (
            <li key={index} className="marker:text-white">
              {title}
            </li>
          ))}
        </ul>
      </div>

      {/* <div
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
        </div> */}
      <div className="absolute top-2/3 flex items-center justify-center rounded-tr-xl rounded-br-md bg-[#DDCEBA] p-4 ltr:left-0 rtl:right-0 md:top-2/3 md:w-[700px] md:rtl:right-0">
        <div
          className={`text-center md:font-gilda font-barlow text-2xl font-semibold text-bold leading-10 text-white text-opacity-95 md:text-6xl ltr:tracking-[4px]`}
        >
          {subTitle ? subTitle : ''}
        </div>
      </div>
      {showButton ? <ButtonRefactor text="Register Now" /> : <></>}
      <Image
        loading="lazy"
        className="absolute bottom-0 mr-12 h-[365px] ml-24 md:ml-0 w-[300px] sm:h-[365px] sm:w-[500px] md:mr-0 md:h-[365px] md:w-[500px] xl:h-[560px] xl:w-[420px] ltr:-right-32 ltr:md:right-0 rtl:-left-32 md:rtl:left-0 md:rtl:right-auto "
        src="/static/images/Vector 58 (1).png"
        alt="Landa"
        width={500}
        height={500}
      />
    </div>
  );
}
