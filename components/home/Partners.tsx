'use client';
// import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
// import PartnersDiamondsContainer from './PartnersDiamondsContainer';
import PartnersStartupCard from './PartnersStartupCard';
// import { useTranslation } from 'app/i18n';
import { logos } from 'app/[lang]/statics';

export default function Partners(
  { lang }: { lang: string }
) {

  // const { t } = await useTranslation(lang, "mainPage")

  // const LangChangeHandle = async (lang: string) => {
  //   const { t } = await useTranslation(lang, "mainPage")

  //   return t;
  // }

  // const translated = LangChangeHandle(lang);

  // const L = translated.then((res) => {
  //   const L = res('partners', { returnObjects: true }).logos
  //   return L
  // })

  // const t = translated.then((res) => {
  //   const title = res('partners', { returnObjects: true }).title
  //   return title
  // })

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(lang === 'en' ? true : false);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      // const scrollSpeed = 50; // Adjust this value to control the scroll speed.
      const scrollAmount = 1;
      if (scrollContainer != null && isScrolling) {
        // Check if scrolling is allowed
        const isScrollingLeft = scrollContainer.scrollLeft > 0;

        if (!isScrollingLeft) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        } else {
          scrollContainer.scrollLeft -= scrollAmount;
        }
      }
    }

    const intervalId = setInterval(scrollAutomatically, 50); // Adjust the interval as needed.

    return () => clearInterval(intervalId);
  }, [isScrolling]);

  // Add event listeners to stop automatic scroll on mouse enter
  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling
  };

  // Add event listener to resume automatic scroll on mouse leave
  const handleMouseLeave = () => {
    setIsScrolling(lang === "en" ? true : false); // Resume scrolling
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;

    if (scrollContainerRef.current) {
      const x = e.clientX;
      const walk = (x - startX) * 1; // You can adjust the factor for smoother or faster scrolling
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="my-6 flex flex-col items-center gap-12">
      <span className="font-condensed text-3xl text-primary md:text-4xl">
        Join Our Business Affiliates
      </span>
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="scrollContainer grid w-[calc(100%-2%)] cursor-pointer grid-flow-col gap-12 overflow-x-scroll md:overflow-x-hidden"
      >
        {logos.map((logo, index) => (
          <PartnersStartupCard
            key={index}
            logo={logo.number}
            title={logo.title}
            description={logo.description}
          />
        ))}
      </div>
      <Button
        goto="/partner-membership"
        size="visit"
        text="JOIN US"
        bgColor="Primary"
      />
    </div>
  );
}
