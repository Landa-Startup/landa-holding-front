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
    <div className="mb-8 mt-10 min-h-[400px] md:mt-0">
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
      <div className="my-4 font-gilda flex flex-col justify-start gap-6 md:items-start md:py-16 md:pt-12">
        <div className=" pt-10 ">
          <p className='pt-12 pb-1 md:pb-3'>
          {t('upcomingStartups', { returnObjects: true }).landaHolding}
          </p>
          <p className=" font-bold pb-0 md:pb-12 text-2xl text-black md:text-5xl ">
            {t('upcomingStartups', { returnObjects: true }).title}
          </p>
        </div>
        <div className="flex flex-col md:gap-8 md:flex-row justify-between">
          {renderCards(t('upcomingStartups', { returnObjects: true }).cards)}
        </div>
      </div>
      {/* <UpcomingStartupsCard /> */}
    </div>
  );
}
