import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function HomeOurTeam() {
  const { t } = await useTranslation('fa', 'translation');

  return (
    <div className="w-full  mb-16 bg-white flex-col justify-start items-center relative gap-9 inline-flex ">
      <div className="ml-5 xl:ml-40 lg:self-start flex flex-col items-center">
        <span className="text-black text-base font-normal tracking-[5.60px] font-condensed">
          {t('LANDA HOLDING')}
          <br />
        </span>
        <span className="text-5xl font-normal tracking-widest text-black font-condensed ">
          {t('Our Team')}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <p className="md:mx-40 md:text-left text-center">
          Our team of experts is comprised of professionals who are passionate
          about their work, and have an extensive background in a wide variety
          of applications, and are willing to help at any time.
        </p>
      </div>
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
      <Link href={'/our-team'}>
        <button className="justify-items-center mx-auto bg-[#AA8453] text-white md:mt-8 flex px-10 py-2 font-barlow">
          {t('View More')}
        </button>
      </Link>
    </div>
  );
}
