import React from 'react'
import PrimaryDot from '../icons/acceleration/PrimaryDot'
import Image from 'next/image'
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
}

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

  const { t } = await useTranslation(lang, "acceleration");

  return (
    <>
      <div className={`relative bg-[#F7F3EE] px-2 md:w-[1205px] md:px-8 lg:px-8 xl:px-8 ${addedClass}`} dir={t('lng') === "en" ? "ltr" : "rtl"}>
        <div className='mt-8 flex items-end gap-2 md:mt-[77px]'>
          <PrimaryDot />
          <div className='flex flex-col items-start md:flex-row'>
            <span className='font-gilda text-xl text-[#80633E] md:mx-2 md:text-3xl'>
              {title}
            </span>
            <span className='font-gilda text-base text-[#AA8453] md:text-3xl'>
              {slogan}
            </span>
          </div>
        </div>
        <Image
          className={imageClass}
          src={imageSrc}
          alt='ACCELERATOR'
          width={71}
          height={60}
          loading='lazy'
        />
        <div className='mt-6 flex flex-col pb-3 font-barlow leading-[24px] tracking-[1.6px] text-[#000] md:ml-48 lg:ml-20 xl:ml-0'>
          <p className={`${t('lng') && "text-right"}`}>{textUp}</p>
          <p className={`mt-5 ${t('lng') && "text-right"}`}>{textDown}</p>
        </div>
        <div className='flex justify-start'>
          {itemsList &&
            <span className={`mt-8 font-gilda text-3xl text-[#AA8453] ${t('lng') === "en" ? "" : "text-right"}`}>
              {t('AcceleratorProcess', { returnObjects: true })[0].title}
            </span>
          }
        </div>

        {itemsList &&
          <div className='z-10 mt-6 grid grid-cols-2 gap-6 font-barlow text-xs text-[#000] md:text-sm lg:text-sm xl:text-sm'>
            {itemsList?.map((item, index) => (
              <span key={index} className={`${t('lng') === "en" ? "text-normal" : "text-right"} lg:text-lg`}>{item}</span>
            ))}
          </div>
        }
        <Image
          className='absolute bottom-0 right-0 opacity-20'
          src={secondImageSrc}
          alt='ACCELERATOR'
          width={521}
          height={4221}
          loading='lazy'
        />
      </div>
    </>
  )
}