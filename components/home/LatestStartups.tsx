'use client'
import LatestStartupsCard from './LatestStartupsCard';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

export default function LatestStartups() {

  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'mainPage');

  return (
    <div>
      <div className="flex flex-col pt-28 md:pt-16">
        <div className="flex flex-col">
          <div className="flex-col items-start justify-start md:self-start">
            <div className=" flex flex-col items-center md:items-start mb-6 md:mb-12">
              <div
                className={`ltr:tracking-0 md:tracking-0 ps-1 font-condensed text-xl font-normal text-neutral-800 md:text-base ltr:tracking-[3.5px]`}
              >
                {/* {t('LandaHolding')} */}
              </div>
              <p className='font-gilda '>
              {t('LandaHolding')}
              </p>
              <div
                className={`ltr:tracking-0 md:tracking-0 font-gilda text-2xl md:text-4xl font-bold text-black md:mt-3 ltr:tracking-[3.5px]`}
              >
                {t('LatestStartups')}
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-3 flex-wrap  justify-center md:justify-between">
              {t('LatestStartupsList', { returnObjects: true }).map(
                (
                  {
                    image,
                    title,
                    description,
                    link
                  }: {
                    image: string;
                    title: string;
                    description: string;
                    link: string;
                  },
                  index: number
                ) => (
                  <LatestStartupsCard
                    key={index}
                    title={title}
                    image={image}
                    description={description}
                    link={link}
                    lang={t('lng')}
                  />
                )
              )}
          </div>
          <div className="my-14 h-auto w-[224px] p-2 mx-auto">

          </div>
        </div>
      </div>
    </div>
  );
}
