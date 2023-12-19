import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default async function AboutUsLandaHolding() {
  const lang = useLang.getState().lang;

  const { t } = await useTranslation(lang, 'aboutUs');

  // const translation = t('aboutLandaHolding', {returnObjects: true})[0]

  return (
    // <div className="flex flex-col items-center justify-between bg-[#FAFAFA] pt-5 md:pr-[6.5rem] lg:flex-col xl:flex-row">
    // <div className="space-y-2 md:ml-20 px-6 py-2 text-black md:px-0 md:max-w-[200px]">
    //   <p className="font-gilda text-3xl font-semibold">
    //     {t('aboutLandaHolding', { returnObjects: true })[0].title}
    //   </p>
    //   <p className="mb-20  ml-0 mt-4 text-justify font-barlow font-normal tracking-wide rtl:text-base  md:mt-8 lg:w-[687px]">
    //     {t('aboutLandaHolding', { returnObjects: true })[0].text}
    //   </p>
    // </div>
    // <Image
    //   className="brightness-95 contrast-[1.15] drop-shadow-md"
    //   loading="lazy"
    //   src="/static/images/About/team.jpg"
    //   width={661}
    //   height={404}
    //   quality={100}
    //   alt="Landa Team"
    //   objectFit="cover"
    // />
    // </div>
    <div className="flex flex-col items-start justify-between bg-[#FAFAFA] p-10 md:px-28 md:py-10 lg:flex-row">
      <div className="space-y-2 px-6 py-2 text-black md:px-0">
        <p className="font-gilda text-3xl font-semibold">
          {t('aboutLandaHolding', { returnObjects: true })[0].title}
        </p>
        <p className="mb-20  ml-0 mt-4 text-lg text-justify font-barlow font-normal tracking-wide  md:mt-8 lg:w-[517px]">
          {t('aboutLandaHolding', { returnObjects: true })[0].text}
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
