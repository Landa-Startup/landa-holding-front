'use client'
import LandaHoldingPriorityCard from './LandaHoldingPriorityCard';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function LandaHoldingPriority() {
  const lang = useLang().lang;
  const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="relative inline-flex w-full flex-col items-center justify-start gap-9 bg-white pt-16 pb-0 md:pb-16 ">
      <div className="flex flex-col items-start">
<<<<<<< HEAD
        <div className="mb-4 flex flex-col items-start pt-4 md:pt-0">
          <span className="mb-5 font-gilda md:pl-0 text-2xl md:text-4xl  font-bold text-black">
=======
        <div className="mb-4 flex flex-col items-start pt-4 md:pt-0 ltr:ml-4 rtl:mr-4">
          <span className="mb-5 ltr:font-gilda rtl:font-EBGaramond  pl-10 md:pl-0  text-4xl  font-bold text-black ltr:tracking-widest rtl:tracking-normal">
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
            {t('Priorities')}
          </span>
        </div>
        <div>
          <div className="flex justify-between flex-wrap gap-5">
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
