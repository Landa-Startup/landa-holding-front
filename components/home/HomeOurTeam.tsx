import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import { useTranslation } from 'app/i18n';


export default async function HomeOurTeam(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "mainPage")

  return (
    <div className="relative  mb-16 inline-flex w-full flex-col items-center justify-start gap-9 bg-white ">
      <div className='felx flex-col items-start gap-2'>
      <div className={`${t('lng') === "en" ? "ml-5 mr-10 xl:ml-28" : "mr-5 xl:mr-40"} flex flex-col lg:self-start `}>
        <span className={`text-base font-normal text-black ${t('lng') === "en" ? "tracking-[5.60px]" : "tracking-[2px]"} font-condensed text-xl`}>
          {t('LandaHolding')}
          <br />
        </span>
        <span className={`text-5xl font-normal ${t('lng') === "en" ? "tracking-widest" : "p-4 tracking-normal"} font-condensed text-black`}>
          {t('OurTeam')}
          <br />
        </span>
        <p className={`mt-8 ${t('lng') === "en" ? "" : "text-xl"}`}>
          {t('ourTeamText')}
          <br />
        </p>
      </div>

      {/* <div className="flex flex-col lg">
      </div> */}
     
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
      <Link href={t('lng') === "en" ? "/en/our-team" : "/fa/our-team"} className='justify-center'>
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
