'use client'
import Image from 'next/image';

import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function StoryOfLanda() {
  
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'aboutUs');

  return (
    <div className="flex flex-col gap-12 pb-10 ">
      {/* top */}
      <div className="flex flex-col gap-12 bg-[#FAFAFA] pb-14 pt-0 text-[#000] sm:py-14 md:px-32 lg:flex-row">
        {/* top - left */}
        <div className="flex flex-col text-justify md:w-full lg:w-1/2 xl:w-1/2">
          <div className="relative h-[310px] w-screen md:h-[310px] md:w-[300px] lg:w-[449px] xl:w-[589px] ">
            <Image
              className="object-cover"
              src="/static/images/About/story/1.png"
              alt="story of landa"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-10 px-10 md:px-0 md:pl-0">
            <span className="mb-5 mt-9 font-gilda text-3xl text-primary">
              {t('TheStoryOfLanda', { returnObjects: true })[0].title}
            </span>
            <div className="flex flex-col space-y-4 font-barlow text-[#000]">
              <p>{t('TheStoryOfLanda', { returnObjects: true })[0].text}</p>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
        {/* top - left */}
        {/* TODO: make a for loop for this section instead of duplicate code */}
        {/* TODO: Why use [0],[1] for all translations? */}
        {/* top - right */}
        <div className="flex flex-col  px-10 md:w-full md:text-justify lg:w-1/2 xl:w-1/2">
          <span className="font-gilda text-3xl text-primary">
            {t('LANDAStartups', { returnObjects: true })[0].title}
          </span>
          <ul className="mt-5  flex flex-col space-y-3 font-barlow">
            {/* <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].StartupAcademy}
              </span>
              :
              <span className="">
                {t('LANDAStartups', { returnObjects: true })[0].StartupAcademy}
              </span>
            </li> */}
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].LandaTrip}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].LandaTrip}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].Diaco}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].Diaco}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].VisionRaft}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].VisionRaft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].LandaHandicraft}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].LandaHandicraft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].LandaGene}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].LandaGene}
            </li>
          </ul>
        </div>
        {/* top - right */}
      </div>
      {/* top */}

      {/* down */}
      <div className="flex w-full flex-col gap-12 text-[#000] md:flex-col md:px-32 lg:flex-row xl:flex-col">
        <div className="flex flex-col px-10 font-barlow sm:px-0 md:w-full">
          <span className="font-gilda text-3xl text-primary">
            {t('VisionOfTheLanaHolding', { returnObjects: true })[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4 text-justify">
            <p>
              {t('VisionOfTheLanaHolding', { returnObjects: true })[0].text}
            </p>
          </div>
        </div>
        <div className="flex flex-col px-10 font-barlow sm:px-0 md:w-full">
          <span className="font-gilda text-3xl text-primary">
            {t('Our mission and purpose', { returnObjects: true })[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4 text-justify">
            <p>
              {t('Our mission and purpose', { returnObjects: true })[0].text}
            </p>
          </div>
        </div>
      </div>
      {/* down */}
    </div>
  );
}
