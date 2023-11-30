import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from '../../app/[lang]/statics'
import Button from '../common/Button';
import { useTranslation } from 'app/i18n';


export default async function HomeOurTeam(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "mainPage")

  return (
    <div className="w-full  mb-16 bg-white flex-col justify-start items-center relative gap-9 inline-flex ">
      <div className={`${t('lng') === "en" ? "ml-5 xl:ml-28 mr-10" : "mr-5 xl:mr-40"} lg:self-start flex flex-col `}>
        <span className={`text-black text-base font-normal ${t('lng') === "en" ? "tracking-[5.60px]" : "tracking-[2px]"} font-condensed text-xl`}>
          {t('LandaHolding')}
          <br />
        </span>
        <span className={`text-5xl font-normal ${t('lng') === "en" ? "tracking-widest" : "tracking-normal p-4"} text-black font-condensed`}>
          {t('OurTeam')}
          <br />
        </span>
        <p className={`mt-8 ${t('lng') === "en" ? "" : "text-xl"}`}>
          {t('ourTeamText')}
        </p>
      </div>

      {/* <div className="flex flex-col lg">
      </div> */}
     
      <Image
        loading="lazy"
        width={789}
        height={243}
        alt="OurTeam"
        className="hidden md:block w-[444px] md:w-[1192px] h-[284px] md:h-[693px] object-cover"
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
      <Link href={t('lng') === "en" ? "/en/our-team" : "/fa/our-team"}>
        <Button
          type='button'
          size='visit'
          bgColor="Primary"
          goto=''
          lang={lang}
        />
      </Link>
    </div>
  );
}
