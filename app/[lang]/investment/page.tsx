import Hero from '@/components/investment/HeroInvestment';
// import Hero from '@/components/home/Hero';
import Button from '@/components/common/Button';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Link from '@/components/icons/Link';
import FeaturesCards from '@/components/investment/FeaturesCards';
import Image from 'next/image';
import React from 'react';
import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Investment',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default async function page(
  {
    params: { lang },
  }: {
    params: { lang: string };
  }
) {

  const { t } = await useTranslation(lang, "investment")

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      {/* TODO: we have multiple hero with same styles. make one component for all */}
      <Hero
        backgroundImage="/static/images/investment/hero.png"
        showLanda
        leftImage="/static/images/investment/left.svg"
        showButton
        lang={lang}
      />
      {/* <Hero
        showLanda
        title={t('LandaHolding')}
        titles={t('banner')}
        backgroundImage='/static/images/investment/hero.png'
        leftImage='/static/images/investment/left.svg'
        showButton
        lang={lang}
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 bg-[#F7F3EE] items-end">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-gilda whitespace-nowrap">
            <span className="text-3xl md:text-5xl text-[#55422A]">
              {t('LandaInvestment')}
            </span>
            <span className="text-lg md:text-4xl text-primary">
              {t('question')}
            </span>
          </div>
          {/* TODO: make component these texts */}
          <p className="leading-8 tracking-[1px] font-barlow text-justify">
            {t('text')}
          </p>
        </div>
        <div className="w-[320px] md:w-[600px] h-[300px] md:h-[450px] relative">
          <Image
            className="object-cover"
            src="/static/images/investment/1.jpg"
            alt="LANDA INVESTMENT"
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 relative">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl text-primary font-gilda">
              {t('typesTitle')}
            </span>
          </div>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            {t('typesText')}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="md:w-[575px] h-[171px] relative">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1.png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            {t('strategyTitle')}
          </span>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            {t('strategyText')}
          </p>
        </div>
        <Image
          src="/static/images/investment/logo 1.png"
          alt="Logo"
          layout="fill"
          className="object-contain pb-[500px] md:pb-10 md:pt-10 -z-10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 bg-[#F7F3EE]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl text-primary font-gilda">
              {t('startUpInvestingTitle')}
            </span>
          </div>
          <p className="leading-8 tracking-[1px] font-barlow text-justify">
            {t('startUpInvestingText')}
          </p>
          <div className="relative w-[330px] md:w-[561px] md:h-[168px] h-[300px]">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (2).png"
              alt="Coin"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="md:w-[575px] h-[230px] relative hidden md:block">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (5).png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            {t('visionTitle')}
          </span>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            {t('visionText')}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            {t('certificate')}
          </span>
          <div className="flex items-end">
            <Certificate />
            <Link size={32} addedClass="-ml-10 mb-3 z-10" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className={`tracking-[1px] font-barlow text-justify ${lang === "en" ? "leading-8" : "leading-10 text-lg"}`}>
            {t('focusText')}
          </p>
          <Button
            goto="/"
            size="not"
            text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}
            bgColor="Primary"
            lang={lang}
          />
        </div>
      </div>
      <div className="bg-[#F7F3EE] py-10 md:py-16 px-8 md:px-28">
        <div className="leading-8 tracking-[1px] font-barlow text-justify">
          <p>
            {t('objectiveText1')}
          </p>
          <p>
            {t('objectiveText2')}
          </p>
        </div>
        <FeaturesCardsContainer lang={lang} />
      </div>
      {/* <UpcomingEvents /> */}
    </div>
  );
}
