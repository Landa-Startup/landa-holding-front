'use client'
import Image from 'next/image';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
// import { getInitialProps } from 'react-i18next';

export default function AboutUsLandaHolding() {
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'aboutUs');

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
    <div className="flex flex-col items-start justify-between bg-[#FAFAFA]  md:px-28 md:py-10 lg:flex-row lg:gap-8">
      <div className="space-y-2 p-10 md:pt-8 text-black md:px-0">
        <p className="font-gilda text-3xl font-semibold">
          {t('aboutLandaHolding', { returnObjects: true })[0].title}
        </p>
        <p className="mb-20  ml-0 mt-4 text-justify font-barlow text-lg font-normal tracking-wide  md:mt-8 lg:w-[548px]">
          {t('aboutLandaHolding', { returnObjects: true })[0].text}
        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md mt-10 md:mt-32"
        loading="lazy"
        src="/static/images/About/team.jpg"
        width={655}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>
  );
}