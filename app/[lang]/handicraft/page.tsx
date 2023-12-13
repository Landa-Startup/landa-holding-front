import BannerStartUp from '@/components/common/BannerStartup';
import HandicraftForm from '@/components/common/form/HandicraftForm';
import { useTranslation } from 'app/i18n';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landa Holding | Handicrafts',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'handicraft');

  return (
    <div>
      <BannerStartUp
        image="/static/images/handicraftBanner.png"
        title={t('bannerTitle')}
        logo="/static/images/handicrafts.svg"
        lang={lang}
      />
      <div className="mx-8 my-14 flex flex-col gap-8 md:mx-24">
        <div className="relative flex">
          <Image
            className="hidden md:block"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            width={500}
            height={500}
          />
          <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          />
          <p className="z-10 text-justify font-barlow text-base font-normal leading-[48px] tracking-wider text-black md:mt-5">
            {t('paragraph1')}
          </p>
        </div>
        <div className="relative flex flex-col-reverse justify-between overflow-hidden md:flex-row">
          <p className="mt-7 text-justify font-barlow text-base font-normal leading-[45px] tracking-wider text-black md:mt-0 md:w-[652px]">
            {t('paragraph2')}
            <br />
            {t('paragraph3')}
          </p>
          <div className="absolute -bottom-56 -right-40 h-[650px] w-screen md:hidden">
            <Image
              className=" object-cover opacity-20 md:hidden"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              layout="fill"
            />
          </div>
          <div className="relative h-[500px] w-full md:w-[650px]">
            <Image
              className="rounded-sm object-cover"
              src="/static/images/handicrafts1.jpg"
              alt="handicraft"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-11 rounded-sm bg-[#F7F3EE] px-8 py-5 md:px-24">
          <p className="font-openSans text-base font-bold leading-[210%] tracking-wider text-[#AA8453]">
            {t('formTitle')}
          </p>
          <HandicraftForm />
        </div>
      </div>
    </div>
  );
}
