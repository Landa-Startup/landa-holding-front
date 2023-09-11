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
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-screen relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center md:h-screen space-y-5 py-36">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center text-white text-2xl md:tracking-[11.20px] font-condensed font-normal tracking-[7px]`}
        >
          Landa Holding
        </div>
        <div className="hidden md:flex text-center font-barlow text-neutral-50 text-opacity-75 text-4xl font-semibold leading-10 tracking-[2px] flex-col space-y-2">
          {titles.map((title, index) => {
            const currentIndex = (titleIndex + index) % titles.length;
            const titleClass = `opacity-${
              index === 1 ? 100 : 25
            } transform translate-y-${
              index === 0 ? '-4' : index === 2 ? '4' : '0'
            }`;

            return (
              <div
                key={index}
                className={`font-gilda tracking-[6.5px] ${
                  index === 1 ? 'opacity-100' : 'opacity-25'
                } transform ${
                  index === 0
                    ? '-translate-y-4 pt-4 text-5xl'
                    : index === 2
                    ? 'translate-y-4 pb-4 text-5xl'
                    : 'translate-y-0 text-6xl'
                }`}
              >
                {titles[currentIndex]}
              </div>
            );
          })}
        </div>

        <div className="hidden md:block text-center font-barlow text-neutral-50 text-opacity-95 text-4xl font-semibold leading-10 tracking-[2px]">
          {subTitle}
        </div>
        <div className="md:hidden text-center w-[300px] font-barlow text-neutral-50 text-[20px] md:text-4xl font-normal leading-8 md:leading-10 md:tracking-[2px]">
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
          className="w-[365px] md:w-[412px] h-[497px] md:h-[560px] absolute -right-16 md:right-0 bottom-0"
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
        <Link
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
        </Link>
      </div>
    </div>
  );
}
