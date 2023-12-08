import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'app/i18n';

export default async function StoryOfLanda(
  { lang }: { lang: string }
) {

  const { t } = await useTranslation(lang, "aboutUs");

  return (
    <div className="flex flex-col gap-12 bg-[#F7F3EE] py-10 md:px-32 md:py-14">
      <div className="flex flex-col gap-12 text-[#000] lg:flex-row">
        <div className="flex flex-col text-justify md:w-full lg:w-1/2 xl:w-1/2">
          <div className="relative -ml-10 h-[310px] w-screen md:h-[310px] md:w-[500px] lg:w-[449px] xl:w-[589px] ">
            <Image
              className="object-cover"
              src="/static/images/About/story/1.png"
              alt="story of landa"
              layout="fill"
            />
          </div>
        <div className="mt-4 px-10">
        <span className="mb-5 mt-9 font-gilda text-3xl text-primary">
            {t('TheStoryOfLanda', { returnObjects: true })[0].title}
          </span>
          <div className="flex flex-col space-y-4 font-barlow text-[#000]">
            <p>
              {t('TheStoryOfLanda', { returnObjects: true })[0].text}
            </p>
            <div className="flex flex-col">
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col  px-10 md:w-full md:text-justify lg:w-1/2 xl:w-1/2">
          <span className="font-gilda text-3xl text-primary">
            {t('LANDAStartups', { returnObjects: true })[0].title}
          </span>
          <ul className="mt-5  flex flex-col space-y-3 font-barlow">
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].StartupAcademy}</span>:
              <span className=''>{t('LANDAStartups', { returnObjects: true })[0].StartupAcademy}</span>
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].LandaTrip}</span>:
              {t('LANDAStartups', { returnObjects: true })[0].LandaTrip}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].Diaco}</span>:
              {t('LANDAStartups', { returnObjects: true })[0].Diaco}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].VisionRaft}</span>:
              {t('LANDAStartups', { returnObjects: true })[0].VisionRaft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].LandaHandicraft}</span>:
              {t('LANDAStartups', { returnObjects: true })[0].LandaHandicraft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">{t('LANDAStartups', { returnObjects: true })[1].SteadySkull}</span>:
              {t('LANDAStartups', { returnObjects: true })[0].SteadySkull}
            </li>

          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-12 text-[#000] md:flex-col lg:flex-row xl:flex-row">
        <div className="flex flex-col px-10 font-barlow md:w-full">
          <span className="font-gilda text-3xl text-primary">
            {t('VisionOfTheLanaHolding', { returnObjects: true })[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4">
            <p>
              {t('VisionOfTheLanaHolding', { returnObjects: true })[0].text1}
            </p>
            <p>
              {t('VisionOfTheLanaHolding', { returnObjects: true })[0].text2}
            </p>
            <p>
              {t('VisionOfTheLanaHolding', { returnObjects: true })[0].text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}