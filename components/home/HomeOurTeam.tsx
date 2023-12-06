import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Button from '../common/Button';
import { useTranslation } from 'app/i18n';
import ArrowRight from '../icons/common/ArrowRight';


export default async function HomeOurTeam(
  { lang }: { lang: string }
) {

  const { t } = await useTranslation(lang, "mainPage")

  return (
    <div className="relative  mb-16 inline-flex w-full flex-col items-center justify-start gap-9 bg-white ">
      <div className={`rtl:ml-5 mr-10 xl:ml-28 ltr:mr-5 xl:mr-40 flex flex-col lg:self-start `}>
        <span className={`font-normal mr-20 text-black ltr:tracking-[5.60px] font-condensed text-xl xl:mr-0 `}>
          {t('LandaHolding')}
          <br />
        </span>
        <span className={`text-5xl mr-20 font-normal ltr:tracking-widest ltr:p-4 tracking-normal font-condensed text-black xl:mr-0`}>
          {t('OurTeam')}
          <br />
        </span>
        <p className={`mt-8 rtl: ltr:text-xl font-barlow`}>
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
      <Link href={t('lng') === "en" ? "/en/our-team" : "/fa/our-team"}>
        <button className="flex items-center bg-[#AA8453] rounded-[4px] text-white md:mt-8  px-7 py-3 font-barlow">
          <div>View More</div>
          <div className="pl-2">
            <ArrowRight />
          </div>
        </button>
      </Link>
    </div>
  );
    }