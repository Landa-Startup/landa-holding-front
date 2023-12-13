import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';
import ButtonRefactor from '../common/ButtonRefactor';

export default async function HomeOurTeam({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="relative  mb-16 inline-flex w-full flex-col items-center justify-start gap-9 bg-white">
      <div
        className={`${
          t('lng') === 'en' ? 'ml-5 mr-10 xl:ml-64' : 'mr-5 xl:mr-40'
        } flex flex-col lg:self-start `}
      >
        <p
          className={`text-base font-normal text-black ${
            t('lng') === 'en' ? 'tracking-[5.60px]' : 'tracking-0'
          } font-condensed text-xl`}
        >
          {t('LandaHolding')}
        </p>
        <p
          className={`font-condensed text-5xl font-normal tracking-normal text-black ltr:p-4 ltr:tracking-widest md:mr-20 xl:mr-0`}
        >
          {t('OurTeam')}
        </p>
        <p className="mb-4 mt-8 font-barlow">{t('ourTeamText')}</p>
      </div>

      {/* <div className="flex flex-col lg">
      </div> */}

      <div className="flex flex-col items-center">
        <Image
          loading="lazy"
          width={789}
          height={243}
          alt="OurTeam"
          className="hidden h-[284px] w-[444px] object-cover md:block md:h-[693px] md:w-[1192px]"
          src="/static/images/Home/OurTeam/desktop.jpg"
        />
        <Image
          loading="lazy"
          width={375}
          height={200}
          alt="OurTeam"
          className="object-cover md:hidden"
          src="/static/images/Home/OurTeam/mobile.jpeg"
        />
        <ButtonRefactor text={t('visit')} type="link" href="/our-team" />
      </div>
    </div>
  );
}
