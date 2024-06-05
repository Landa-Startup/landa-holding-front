'use client'
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function LandaHoldingPriority() {
  const lang = useLang().lang;
  const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="relative inline-flex w-full flex-col items-center justify-start gap-9 bg-white py-16 xl:h-[613px] ">
      <div className="flex flex-col items-start">
        <div className="mb-4 flex flex-col items-start pt-4 md:pt-0 ltr:ml-4 rtl:mr-4">
          <span className="mb-5 font-gilda  pl-10 md:pl-0  text-4xl  font-bold text-black ltr:tracking-widest rtl:tracking-normal">
            {t('Priorities')}
          </span>
        </div>
        <div>
          <div className="mx-5 grid  grid-cols-2 place-items-center  gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ">
            {t('cardData1', { returnObjects: true }).map(
              (
                { title, image }: { title: string; image: string },
                index: number
              ) => (
                <LandaHoldingPriorityCard
                  key={index}
                  title={title}
                  image={image}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
