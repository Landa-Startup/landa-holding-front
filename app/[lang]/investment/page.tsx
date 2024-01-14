import Hero from '@/components/investment/HeroInvestment';
import Link from '@/components/icons/Link';
import Image from 'next/image';

import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';
import { useTranslation } from 'app/i18n';
import ButtonRefactor from '@/components/common/ButtonRefactor';

export const metadata: Metadata = {
  title: 'Landa Holding | Investment',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'investment');

  return (
    <div dir={lang === 'en' ? 'ltr' : 'rtl'}>
      {/* TODO: we have multiple hero with same styles. make one component for all */}
      <Hero
        backgroundImage="/static/images/investment/hero.png"
        showLanda
        leftImage="/static/images/investment/left.svg"
        showButton
        lang={lang}
      />
    
      <div className="grid grid-cols-1 gap-6 bg-[#F7F3EE] px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="font-gilda text-2xl text-primary md:text-4xl">
              {t('startUpInvestingTitle')}
            </span>
          </div>
          <p className="text-justify font-barlow leading-8">
            {t('startUpInvestingText')}
          </p>
          <div className="relative h-[300px] w-[330px] md:h-[168px] md:w-[561px]">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (2).png"
              alt="Coin"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
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
        <div className="flex flex-col items-center justify-center space-y-5 rtl:space-y-reverse">
          <p className="text-justify font-barlow tracking-[1px] ltr:leading-8 rtl:text-lg rtl:leading-10">
            {t('focusText')}
          </p>
          {/* <Button
            goto="/"
            size="not"
            text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}
            bgColor="Primary"
            lang={lang}
          /> */}
          <ButtonRefactor text={t('buttonTitle')} />
        </div>
      </div>
      <div className="bg-[#F7F3EE] px-8 py-10 md:px-28 md:py-16">
        <div className="text-justify font-barlow leading-8">
          <span className='font-gilda text-lg text-primary md:text-4xl '>{t('investmentstrategy')}</span>
          <p>{t('objectiveText1')}</p>

        </div>
        <FeaturesCardsContainer />
      </div>
      {/* <UpcomingEvents /> */}
    </div>
  );
}
