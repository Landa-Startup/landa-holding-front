import React from 'react';
import PrimaryDot from '../icons/acceleration/PrimaryDot';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';

type Props = {
  addedClass: string;
  title: string;
  slogan: string;
  imageClass: string;
  imageSrc: string;
  textUp: string;
  textDown: string;
  secondImageSrc: string;
  itemsList?: Array<string>;
  lang: string;
};

export default async function AccelerationCard({
  addedClass,
  title,
  slogan,
  imageClass,
  imageSrc,
  textUp,
  textDown,
  secondImageSrc,
  itemsList,
  lang
}: Props) {
  const { t } = await useTranslation(lang, 'acceleration');

  return (
    <>
      <div
        className={`relative bg-[#F7F3EE] px-2 md:w-[1205px] md:px-8 lg:px-8 xl:px-8 ${addedClass}`}
        dir={t('lng') === 'en' ? 'ltr' : 'rtl'}
      >
        {/* <div className="flex items-center justify-start "> */}
          {/* <div className=" md:flex-row "> */}

          <div className="w-full flex justify-between mt-10">
            <div className='flex items-center'>
              <PrimaryDot />
              <span className="font-gilda text-xs mr-2 text-[#80633E] md:mx-2 md:text-3xl ">
                {title}
              </span>
              <span className="font-gilda text-xs flex flex-col text-base text-[#AA8453] md:text-3xl">
                {slogan}
              </span>
            </div>
            <div>
                <Image
                  // className={imageClass}
                  src={imageSrc}
                  alt="ACCELERATOR"
                  width={51}
                  height={60}
                  loading="lazy"
                />
            </div>
          </div>
          {/* </div> */}
        {/* </div> */}

        <div className="mt-6 flex flex-col pb-3 font-barlow leading-[24px] ltr:tracking-[1.6px] text-[#000] md:ml-48 lg:ml-20 xl:ml-0">
          <p className={`${t('lng') && 'text-right'}`}>{textUp}</p>
          <p className={`mt-5 ${t('lng') && 'text-right'}`}>{textDown}</p>
        </div>
        <div className="flex justify-start">
          {itemsList && (
            <span
              className={`mt-8 font-gilda text-3xl text-[#AA8453] rtl: ltr:text-right`}
            >
              {t('AcceleratorProcess', { returnObjects: true })[0].title}
            </span>
          )}
        </div>

        {itemsList && (
          <div className="z-10 mt-6 grid grid-cols-2 gap-6 font-barlow text-xs text-[#000] md:text-sm lg:text-sm xl:text-sm rtl:text-right ltr:text-right">
            {itemsList?.map((item, index) => (
              <span
                key={index}
                className={`rtl:text-normal ltr:text-right lg:text-lg`}
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <Image
          className="absolute bottom-0 right-0 opacity-20"
          src={secondImageSrc}
          alt="ACCELERATOR"
          width={521}
          height={4221}
          loading="lazy"
        />
      </div>
    </>
  );
}
