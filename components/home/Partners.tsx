'use client';
import React, { useEffect, useRef, useState } from 'react';
import PartnersStartupCard from './PartnersStartupCard';
import { useTranslation } from 'app/i18n';
import { logos } from 'app/[lang]/statics';
import ButtonRefactor from '../common/ButtonRefactor';

export default function Partners({ lang }: { lang: string }) {
  const LangChangeHandle = async (lang: string) => {
    const { t } = await useTranslation(lang, 'mainPage');
    return t;
  };

  const translated = LangChangeHandle(lang);

  const L = translated.then((res) => res('partners', { returnObjects: true }).logos);
  const t = translated.then((res) => res('partners', { returnObjects: true }).title);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      const scrollAmount = 1;
      if (scrollContainer != null && isScrolling) {
        const isScrollingLeft = scrollContainer.scrollLeft > 0;

        if (!isScrollingLeft) {
          scrollContainer.scrollLeft = lang === 'fa' ? scrollContainer.scrollWidth : 0;
        } else {
          scrollContainer.scrollLeft += lang === 'fa' ? scrollAmount : -scrollAmount;
        }
      }
    }

    const intervalId = setInterval(scrollAutomatically, 50);

    return () => clearInterval(intervalId);
  }, [isScrolling, lang]);

  const handleMouseEnter = () => {
    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsScrolling(lang === 'en');
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
      const walk = (x - startX) * 1;

      if (lang === 'fa') {
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      } else {
        scrollContainerRef.current.scrollLeft = scrollLeft + walk;
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="my-6 flex flex-col items-center gap-12">
      <span className="font-condensed text-3xl text-primary md:text-4xl">
        {lang === 'en' ? 'Join Our Business Affiliates' : t.then((res) => <>{res}</>)}
      </span>
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="scrollContainer grid w-[calc(100%-2%)] cursor-pointer grid-flow-col gap-12 overflow-x-scroll"
      >
        {lang === 'en' &&
          logos.map((logo, index) => (
            <section key={index}>
              <PartnersStartupCard
                logo={logo.number}
                title={logo.title}
                description={logo.description}
              />
            </section>
          ))}
        {lang === 'fa' &&
          L.then((res) => (
            <>
              {res.map(
                ({ number, title, description }: { number: number; title: string; description: string }) => (
                  <section className="snap-center" key={number}>
                    <PartnersStartupCard
                      logo={number}
                      title={title}
                      description={description}
                    />
                  </section>
                )
              )}
            </>
          ))}
      </div>

      <ButtonRefactor
        type="link"
        href="/partner-membership"
        text={lang === 'en' ? 'Become a Partner' : 'شریک شوید'}
      />
    </div>
  );
}
