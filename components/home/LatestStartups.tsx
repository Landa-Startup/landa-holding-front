import React from 'react';
import LatestStartupsCard from './LatestStartupsCard';
import { cardData3 } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function LatestStartups(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "mainPage");

  return (
    <div dir={t('lng') === "en" ? "ltr" : "rtl"}>
      <div className="flex flex-col p-5 bg-whiteGold items-center text-center">
        <div className="flex-col justify-start items-start md:ml-44 md:self-start">
          <div className="flex flex-col items-center md:items-start">
            <div className={`text-neutral-800 text-sm md:text-base font-normal ${t('lng') === "en" ? "tracking-[3.5px] md:tracking-[5.60px]" : "tracking-0 md:tracking-0 text-xl"} font-condensed ps-1`}>
              {t('LandaHolding')}
            </div>
            <div className={`text-primary text-4xl md:text-[44px] font-normal ${t('lng') === "en" ? "tracking-[3.5px] md:tracking-[5.60px]" : "tracking-0 md:tracking-0"} font-condensed md:mt-3`}>
              {t('LatestStartups')}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-3 md:gap-10 mt-3 md:mt-10 ">
            {cardData3.map((data, index) => (
              <LatestStartupsCard
                key={index}
                title={t('lng') === "en" ? data.titleEN : data.titleFA}
                image={data.image}
                description={t('lng') === "en" ? data.descriptionEN : data.descriptionFA}
                link={data.link}
                lang={t('lng')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
