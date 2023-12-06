'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
import PartnersDiamondsContainer from './PartnersDiamondsContainer';
import PartnersStartupCard from './PartnersStartupCard';
import { useTranslation } from 'app/i18n';
import { logos } from 'app/[lang]/statics';

export default function Partners(
  {lang} : {lang: string}
) {

  // const { t } = await useTranslation(lang, "mainPage")

  const langChangeHandle = async (lang: string) => {
    const { t } = await useTranslation(lang, "mainPage")

    return t;
  } 

  let translated = langChangeHandle(lang);

  let L = translated.then((res) => {
    let L = res('partners', {returnObjects: true}).logos
    return L
  })

  let t = translated.then((res) => {
    let title = res('partners', {returnObjects: true}).title
    return title
  })

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(lang === "en" ? true : false);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      const scrollSpeed = 50; // Adjust this value to control the scroll speed.
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
    <div className="flex flex-col items-center my-6 gap-12">
      <span className="text-3xl md:text-4xl text-primary">
        {lang === "en" ? "Join Our Business Affiliates" : t.then((res) => (
          <>{res}</>
        ))}
      </span>
      <div
        ref={scrollContainerRef}
        onMouseEnter={lang === "en" ? handleMouseEnter : () => {}}
        onMouseLeave={lang === "en" ? handleMouseLeave : () => {}}
        onMouseDown={lang === "en" ? handleMouseDown : () => {}}
        onMouseMove={lang === "en" ? handleMouseMove : () => {}}
        onMouseUp={lang === "en" ? handleMouseUp : () => {}}
        className="overflow-x-scroll md:overflow-x-hidden rtl:md:overflow-x-scroll gap-12 grid grid-flow-col w-[calc(100%-2%)] cursor-pointer"
      >
        {lang === "en" && logos.map((logo) => (
          <PartnersStartupCard
            key={logo.number}
            logo={logo.number}
            title={logo.title}
            description={logo.description}
          />
        ))}
        {lang === "fa" && L.then((res) => (
          <>
            {res.map(({number, title, description} : {number: number, title: string, description: string}) => (
              <PartnersStartupCard
                key={number}
                logo={number}
                title={title}
                description={description}
              />
            ))}
          </>
        ))}
      </div>
      <Button
        goto="/partner-membership"
        size="visit"
        text="JOIN US"
        bgColor="Primary"
        lang={lang}
      />
    </div>
  );
}