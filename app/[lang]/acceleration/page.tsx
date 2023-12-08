import React from 'react';
import Button from '../../../components/common/Button';
import AccelerationServices from '../../../components/acceleration/AccelerationServices';
import Hero from '../../../components/acceleration/HeroAcceleration';
import { Metadata } from 'next';
import Image from 'next/image';
import AccelerationCard from '../../../components/acceleration/AccelerationCard';
import { useTranslation } from 'app/i18n';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Acceleration',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};
export default async function Page({ params: { lang } }: { params: { lang: string } }) {

  const { t } = await useTranslation(lang, "acceleration");

  return (
    <div>
      <Hero
        showLanda
        backgroundImage="../public/static/images/acceleration/banner.png"
        leftImage="Landa.svg"
        showButton={true}
        lang={lang}
      />
      <div className="relative mt-6 hidden h-[284px] sm:block md:hidden md:w-[490px] ">
        <Image
          className="object-cover"
          src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
          alt="acceleration"
          layout="fill"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center py-6 text-left font-gilda md:px-28 md:py-16">
        <span className={`mb-2 ml-12 mr-8 self-start text-3xl leading-tight text-[#55422A] ltr:mr-7 rtl:ml-7 md:mx-0 md:text-5xl xl:mx-36`}>
          {t('LandaAccelerator', { returnObjects: true })[0].title}
        </span>
        <span className={`ml-12 mr-8 self-start text-xl leading-tight text-[#AA8453] ltr:mr-7 rtl:ml-7 md:mx-0 md:text-4xl xl:mx-36`}>
          {t('LandaAccelerator', { returnObjects: true })[0].subTitle}
        </span>
        <div className={`mt-6 flex flex-col ltr:gap-2 rtl:gap-12 md:flex-row`}>
          <div className="relative hidden h-[284px] md:block md:w-[490px] lg:ml-6 xl:ml-4 xl:mr-10">
            <Image
              className=" object-cover"
              src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
              alt="acceleration"
              layout="fill"
              loading="lazy"
            />
          </div>
          <p className={`w-[340px] text-justify font-barlow leading-8 tracking-[1.6px] ltr:text-lg rtl:text-base md:h-[248px]  md:w-[550px] lg:w-[680px] lg:pr-2`}>
            {t('LandaAccelerator', { returnObjects: true })[0].text}
          </p>
        </div>

        <AccelerationCard
          lang={t('lng')}
          addedClass='md:h-[756px] mt-6 md:mt-16 pb-3'
          title={t('FORUGHACCELERATOR', { returnObjects: true })[0].title}
          slogan={t('FORUGHACCELERATOR', { returnObjects: true })[0].subTitle}
          imageClass={`absolute rtl:text-right ltr:text-left top-11 pl-12 w-[92px] h-[44px] flex flex-row`}
          imageSrc='/static/images/acceleration/Rectangle 2978.png'
          textUp={t('FORUGHACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={t('FORUGHACCELERATOR', { returnObjects: true })[0].textDown}
          secondImageSrc='/static/images/acceleration/87ac8df38c4ff428ee903bb8595ad970.png'
          itemsList={t('FORUGHACCELERATOR', { returnObjects: true })[0].items}
        />

        <AccelerationCard
          lang={t('lng')}
          addedClass='md:h-[756px] mt-6 md:mt-16 pb-3'
          title={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].title}
          slogan={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].subTitle}
          imageClass={`absolute rtl:right-1 ltr:left-1 top-8 w-[46px] h-[46px]`}
          imageSrc='/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png'
          textUp={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textDown}
          secondImageSrc='/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png'
        />

        <div className={`flex flex-col ${t('lng') === "fa" && "items-start"}`}>
          <span className="mt-12 font-gilda text-3xl text-primary">
            {t('LandaAcceleratorServices', { returnObjects: true })[0].title}
          </span>
          <AccelerationServices services={t('LandaAcceleratorServices', { returnObjects: true })[0].items} />
        </div>
        <div className="my-11 flex gap-2 text-center font-barlow text-xl leading-9 text-[#55422A] ltr:tracking-[2px] md:mx-10 md:text-left rtl:md:text-right">
          <svg
            className="mt-3 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              id="Ellipse 169"
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#AA8453"
            />
          </svg>
          {t('text')}
        </div>
        <Button
          goto="/StartupsForm"
          size="visit"
          text={t('Register')}
          bgColor="Primary"
          lang={lang}
        />
      </div>
    </div>
  );
}
