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
    <div className='flex-col w-full'>
    <div className="flex flex-col items-start justify-between md:px-28 md:py-10 md:flex-row md:gap-8">
      <div className="space-y-4 p-10 md:pt-8 text-black md:px-0">
        <p className="rtl:font-EBGaramond ltr:font-gilda text-2xl md:text-4xl text-black md:w-[600px]">
          {t('aboutLandaHolding', { returnObjects: true })[0].title}
        </p>
        <p className="mb-20 ml-0 mt-4 text-justify font-barlow text-medium tracking-wide md:pt-28 lg:w-[500px]">
          {t('aboutLandaHolding', { returnObjects: true })[0].text}
        </p>
      </div>
      <div className='relative object-contain mx-auto rounded-md h-48 w-96  md:w-[761px] md:h-[419px] md:mt-8 rtl:md:mr-32 md:ltr:ml-32'>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md md:rounded-xl"
        loading="lazy"
        layout='fill'
        src="/static/images/About/team.jpg"
        alt="Landa Team"
        objectFit="cover"
      />
      </div>
    </div>
    <div className='flex flex-row items-start md:pl-24 md:rtl:pr-24 pb-24 md:mt-16'>
    <div className="relative h-[310px] hidden md:block w-screen md:h-[419px] md:w-[761px]"> 
            <Image
              className="object-cover w-full rounded-xl"
              src="/static/images/About/story/1.png"
              alt="story of landa"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-10 order-first px-10 md:px-0 md:ltr:pl-12 md:rtl:pr-12 md:order-last md:w-[600px] md:pt-0">
            <span className="mb-5 mt-9 font-gilda text-4xl text-bold">
              {t('TheStoryOfLanda', { returnObjects: true })[0].title}
            </span>
            <div className="flex flex-col space-y-4 font-barlow text-[#000] pt-24 text-justify">
              <p>{t('TheStoryOfLanda', { returnObjects: true })[0].text}</p>
              <div className="flex flex-col"></div>
            </div>
          </div>
    </div>
    </div>
  );
}
