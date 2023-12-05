import React from 'react';
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import Image from 'next/image';
import { cardData1 } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function LandaHoldingPriority(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "mainPage");

  return (
    <div className="`relative inline-flex w-full flex-col items-center justify-start gap-9 bg-white py-10 xl:h-[613px] `">
      <div className="ml-5 flex flex-col items-center lg:self-start xl:ml-40 xl:mr-24">
        <span className={`text-base xl:mr-4 font-normal text-black mb-3 ${t('lng') === "en" ? "tracking-[5.60px]" : "text-xl tracking-[2px]"} font-condensed`}>
          {t('LandaHolding')}
          <br />
        </span>
        <span className={`text-5xl font-normal xl:mr-14 ${t('lng') === "en" ? "tracking-widest" : "tracking-normal lg:mr-8"} font-condensed text-black`}>
          {t('Priorities')}
        </span>
      </div>
      <div>
        <div className="mx-5 grid  grid-cols-2 place-items-center  gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ">
          {cardData1.map((data, index) => (
            <LandaHoldingPriorityCard
              key={index}
              title={t('lng') === "en" ? data.titleEN : data.titleFA}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
