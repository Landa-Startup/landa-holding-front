// 'use client';
import Image from 'next/image';
import '../../app/[lang]/globals.css';
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

      <div className="relative z-10 mt-64 flex w-fit flex-col justify-center gap-8 md:mx-24 md:justify-start md:ltr:ml-10 ">
        <div
          className={`${
            showLanda ? 'block w-fit' : 'hidden'
          } get-shadow px-2 text-center font-gilda text-3xl font-bold text-white drop-shadow-2xl md:ml-6 md:px-0 md:text-center md:text-[90px]`}
        >
          {title}
        </div>
        <ul className="mx-12 flex list-disc flex-col gap-4 font-gilda text-xl tracking-wider text-[#FAFAFA] rtl:tracking-normal md:pt-24 md:text-4xl md:tracking-[3.6px]">
          {titles.map((title: string, index: number) => (
            <li key={index} className={`get-shadow marker:text-white`}>
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
      <div className="absolute top-2/3 mt-20 flex items-center justify-center bg-[#DDCEBA] p-4  ltr:left-0 ltr:rounded-br-2xl rtl:right-0 rtl:rounded-bl-2xl md:top-3/4 md:w-[700px] md:rtl:right-0">
        <div
          className={`text-bold text-center font-barlow text-xl font-semibold leading-10 text-white text-opacity-95 ltr:tracking-[4px] md:font-gilda md:text-5xl`}
        >
         {subTitle ? subTitle : ''}
        </div>
      </div>
      {showButton ? <ButtonRefactor text="Register Now" /> : <></>}
      <Image
        loading="lazy"
        className="absolute bottom-0 ml-24 mr-12 h-[365px] w-[300px] ltr:-right-32 rtl:-left-32 sm:h-[365px] sm:w-[500px] md:mx-0 md:h-[365px] md:w-[500px] ltr:md:right-0 md:rtl:left-0 md:rtl:right-auto xl:h-[560px] xl:w-[420px]"
        src="/static/images/Vector 58 (1).png"
        alt="Landa"
        width={500}
        height={500}
      />
    </div>
  );
}
