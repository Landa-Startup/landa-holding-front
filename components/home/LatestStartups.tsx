import React from 'react';
import LatestStartupsCard from './LatestStartupsCard';
import { useTranslation } from 'app/i18n';
import { useLang } from 'store';

export default async function LatestStartups() {

  const lang = useLang.getState().lang;

  const { t } = await useTranslation(lang, "mainPage");

  return (
    <div>
      <div className="flex flex-col items-center bg-whiteGold p-5 text-center">
        <div className='flex flex-col items-start'>
        <div className="flex-col items-start justify-start md:self-start">
          <div className="flex flex-col items-center md:items-start">
            <div className={`ltr:tracking-0 md:tracking-0 ps-1 font-condensed text-xl font-normal text-neutral-800 ltr:tracking-[3.5px] md:text-base`}>
              {t('LandaHolding')}
            </div>
            <div className={`ltr:tracking-0 md:tracking-0 font-condensed text-4xl font-normal text-primary ltr:tracking-[3.5px] md:mt-3 md:text-[44px]`}>
              {t('LatestStartups')}
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center ">
          <div className="mt-3 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-1 md:gap-10 lg:grid-cols-1 xl:grid-cols-3 ">
            {t('LatestStartupsList', {returnObjects: true}).map(({image, title, description, link} : {image: string, title: string, description: string, link: string}, index: number) => (
              <LatestStartupsCard
                key={index}
                title={title}
                image={image}
                description={description}
                link={link}
                lang={t('lng')}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
