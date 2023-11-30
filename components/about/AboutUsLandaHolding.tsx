import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';

export default async function AboutUsLandaHolding(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs")

  // const translation = t('aboutLandaHolding', {returnObjects: true})[0]

  return (
    <div className="flex flex-col lg:flex-col xl:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA]">
      <div className="text-black p-3 space-y-2">
        <p className="text-3xl text-center font-semibold font-gilda">
          {t('aboutLandaHolding', {returnObjects: true})[0].title}
        </p>
        <p className="lg:w-[687px]  text-justify  text-xl mt-4 md:mt-8 ml-0 md:mx-10 font-normal tracking-wide font-barlow mb-20">
          {t('aboutLandaHolding', {returnObjects: true})[0].text}
        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md"
        loading="lazy"
        src="/static/images/About/team.jpg"
        width={661}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>

  );
}
