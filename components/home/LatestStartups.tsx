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
      <div className="flex flex-col items-center bg-whiteGold p-5 text-center">
        <div className="flex-col items-start justify-start md:ml-44 md:self-start mr-36">
          <div className="flex flex-col items-center ml-36 md:items-start">
            <div className={`text-sm font-normal text-neutral-800 md:text-base ${t('lng') === "en" ? "tracking-[3.5px] md:tracking-[5.60px]" : "tracking-0 md:tracking-0 text-xl"} ps-1 font-condensed`}>
              {t('LandaHolding')}
            </div>
            <div className={`text-4xl font-normal text-primary md:text-[44px] ${t('lng') === "en" ? "tracking-[3.5px] md:tracking-[5.60px]" : "tracking-0 md:tracking-0"} font-condensed md:mt-3`}>
              {t('LatestStartups')}
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center ">
          <div className="mt-3 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-1 md:gap-10 lg:grid-cols-1 xl:grid-cols-3 ">
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
