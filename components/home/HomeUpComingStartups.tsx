'use client'
import React from 'react';
import Image from 'next/image';
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
      ({ image, subTitle, text, goto, buttonText }, index: number) => (
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
    <div className="mb-8 mt-20 min-h-[400px] md:mt-0">
      <div className="relative h-[400px]">
        <Image
          loading="lazy"
          className="h-full object-cover"
          src="/static/images/upComingStartUps.png"
          alt="Upcoming Startups"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mx-3 my-4 flex flex-col items-center justify-start gap-6 md:ml-6 md:mr-0 md:items-start md:p-[32px]">
        <div className="flex flex-col items-start justify-between md:w-[400px] pt-10">
          <p className="tw-[340px] border-b border-black pb-3 font-gilda text-3xl md:text-4xl font-normal text-black md:border-none md:text-start">
            {t('upcomingStartups', { returnObjects: true }).title}
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {renderCards(t('upcomingStartups', { returnObjects: true }).cards)}
        </div>
      </div>
      {/* <UpcomingStartupsCard /> */}
    </div>
  );
}
