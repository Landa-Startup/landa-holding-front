import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
import Link from 'next/link';
export default async function HomeOurTeam() {
  const lang = useLang.getState().lang;

  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="relative  mb-16 inline-flex w-full flex-col items-center justify-start gap-9 bg-white">
      <div
        className="flex flex-col ltr:ml-5 ltr:mr-10 rtl:mr-5 lg:self-start ltr:xl:ml-28 rtl:xl:mr-40"
      >
        <span className="font-condensed text-xl font-normal text-black ltr:tracking-[5.60px]">
          {t('LandaHolding')}
        </span>
        <p
          className={`font-condensed text-5xl font-normal tracking-normal text-black ltr:p-4 ltr:tracking-widest md:mr-20 xl:mr-0`}
        >
          {t('OurTeam')}
        </p>
        <p className="mb-4 mt-8 font-barlow">{t('ourTeamText')}</p>
      </div>

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
      </div>
      <Link
        href="/our-team"
        className="justify-center"
      >
        {/* TODO: delete submit provider */}
        <Button
          type="button"
          size="visit"
          bgColor="Primary"
          goto=""
        />
      </Link>
    </div>
  );
}
