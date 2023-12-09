import Hero from '@/components/investment/HeroInvestment';
import Link from '@/components/icons/Link';
import Image from 'next/image';
import React from 'react';
import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';
import { useTranslation } from 'app/i18n';
import ButtonRefactor from '@/components/common/ButtonRefactor';

export const metadata: Metadata = {
  title: 'Landa Holding | Investment',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default async function Page(
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
      <div className="grid grid-cols-1 items-end gap-6 bg-[#F7F3EE] px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col whitespace-nowrap font-gilda">
            <span className="text-3xl text-[#55422A] md:text-5xl">
              {t('LandaInvestment')}
            </span>
            <span className="text-lg text-primary md:text-4xl">
              {t('question')}
            </span>
          </div>
          {/* TODO: make component these texts */}
          <p className="text-justify font-barlow leading-8 tracking-[1px]">
            {t('text')}
          </p>
        </div>
        <div className="relative h-[300px] w-[320px] md:h-[450px] md:w-[600px]">
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
      {/* <div className="relative grid grid-cols-1 gap-6 px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="font-gilda text-2xl text-primary md:text-4xl">
              {t('typesTitle')}
            </span>
          </div>
          <p className="text-justify font-barlow leading-7 tracking-[1px]">
            {t('typesText')}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative h-[171px] md:w-[575px]">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1.png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="font-gilda text-2xl text-primary md:text-4xl">
            {t('strategyTitle')}
          </span>
          <p className="text-justify font-barlow leading-7 tracking-[1px]">
            {t('strategyText')}
          </p>
        </div>
        <Image
          src="/static/images/investment/logo 1.png"
          alt="Logo"
          layout="fill"
          className="-z-10 object-contain pb-[500px] md:py-10"
        />
      </div> */}
      <div className="grid grid-cols-1 gap-6 bg-[#F7F3EE] px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="font-gilda text-2xl text-primary md:text-4xl">
              {t('startUpInvestingTitle')}
            </span>
          </div>
          <p className="text-justify font-barlow leading-8 tracking-[1px]">
            {t('startUpInvestingText')}
          </p>
          <div className="relative h-[300px] w-[330px] md:h-[168px] md:w-[561px]">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (2).png"
              alt="Coin"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative hidden h-[230px] md:block md:w-[575px]">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (5).png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="font-gilda text-2xl text-primary md:text-4xl">
            {t('visionTitle')}
          </span>
          <p className="text-justify font-barlow leading-7 tracking-[1px]">
            {t('visionText')}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center gap-6 px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <span className="font-gilda text-2xl text-primary md:text-4xl">
            {t('certificate')}
          </span>
          <div className="flex items-end">
            <Certificate />
            <Link size={32} addedClass="-ml-10 mb-3 z-10" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className={`text-justify font-barlow tracking-[1px] ${lang === "en" ? "leading-8" : "text-lg leading-10"}`}>
            {t('focusText')}
          </p>
          {/* <Button
            goto="/"
            size="not"
            text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}
            bgColor="Primary"
            lang={lang}
          /> */}
          <ButtonRefactor text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}/>
        </div>
      </div>
      <div className="bg-[#F7F3EE] px-8 py-10 md:px-28 md:py-16">
        <div className="text-justify font-barlow leading-8 tracking-[1px]">
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
