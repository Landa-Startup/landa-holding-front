'use client';
import React, { useEffect, useRef, useState } from 'react';
import PartnersStartupCard from './PartnersStartupCard';
// import ButtonRefactor from '../common/ButtonRefactor';
import { useTranslation } from 'app/i18n/client';
import Button from '../common/Button';
import { useSubmit } from 'providers/StateProvider';

export default function Partners() {

  const {lang} = useSubmit()

  const { t } = useTranslation(lang, 'mainPage');

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      if (lang === 'fa') {
        return;
      }

      const scrollAmount = 1;
      if (scrollContainer != null && isScrolling) {
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
    setIsScrolling(true); // Resume scrolling
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
      <span className="text-3xl text-primary md:text-4xl">
        {t('partners', { returnObjects: true }).title}
      </span>
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="scrollContainer grid w-[calc(100%-2%)] cursor-pointer grid-flow-col gap-5 overflow-x-scroll px-3 md:overflow-x-hidden"
      >
        {t('partners', { returnObjects: true }).logos.map((logo: any) => (
          <PartnersStartupCard
            key={logo.number}
            logo={logo.number}
            title={logo.title}
            description={logo.description}
          />
        ))}
      </div>
      {/* <ButtonRefactor text="Join Us" type="link" href="/partner-membership" /> */}
      <Button
        goto="/partner-membership"
        size="visit"
        bgColor="Primary"
      />
    </div>
  );
}
