import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';

export default async function AboutUsLandaHolding(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs")

  // const translation = t('aboutLandaHolding', {returnObjects: true})[0]

  return (
    <div className="flex flex-col items-center justify-between md:px-10 bg-[#FAFAFA] pt-5 lg:flex-col xl:flex-row">
      <div className="space-y-2 px-6 py-2 md:px-0 text-black">
        <p className="text-center font-gilda text-3xl font-semibold">
          {t('aboutLandaHolding', {returnObjects: true})[0].title}
        </p>
        <p className="mb-20  ml-0 p-2  mt-4 text-justify font-barlow rtl:text-base font-normal tracking-wide  md:mt-8 lg:w-[687px]">
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
