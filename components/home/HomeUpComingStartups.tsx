'use client'
import React from 'react';
import UpcomingStartupsCard from './UpcomingStartupsCard';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function HomeUpComingStartups() {
  const { lang } = useLang();

  const { t } = useTranslation(lang, 'mainPage');

  const renderCards = (
    cardData: Array<{
      image: string;
      subTitle: string;
      text: string;
      goto: string;
      buttonText: string;
    }>
  ) => {
    return cardData.map(
      ({ image, subTitle, text, goto, buttonText}, index: number) => (
        <UpcomingStartupsCard
          image={image}
          subTitle={subTitle}
          text={text}
          goto={goto}
          buttonText={buttonText}
          key={index}
        />
      )
    );
  };

  return (
    <div className="mb-8 mt-20 min-h-[400px] md:mt-0 py-10">
      {/* <div className="relative h-[400px]">
        <Image
          loading="lazy"
          className="h-full object-cover"
          src="/static/images/upComingStartUps.png"
          alt="Upcoming Startups"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div> */}
      <div className="my-4 flex flex-col items-center justify-start gap-6 md:items-start md:py-16 md:pt-24">
        <div className="flex flex-col items-start justify-between pt-10 md:w-[400px]">
          <p className='md:pt-12 pb-3 font-gilda'>
          {t('upcomingStartups', { returnObjects: true }).landaHolding}
          </p>
          <p className="w-[340px] font-bold border-b border-black pb-12 font-gilda text-2xl text-black md:w-[540px] md:border-none md:text-4xl ">
            {t('upcomingStartups', { returnObjects: true }).title}
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          {renderCards(t('upcomingStartups', { returnObjects: true }).cards)}
        </div>
      </div>
      {/* <UpcomingStartupsCard /> */}
    </div>
  );
}
