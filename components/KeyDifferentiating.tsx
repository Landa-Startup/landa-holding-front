'use client'
import { useTranslation } from 'app/i18n/client';
import Image from 'next/image';
import React, { useState } from 'react'; 

import { useLang } from 'stores/langStore';

const paragraphStyles: React.CSSProperties = {
  WebkitLineClamp: 10,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
};

export default function KeyDifferentiating() {

  const lang = useLang().lang;
  
  const { t } = useTranslation(lang, 'aboutUs');

  const [isOpen, setIsOpen] = useState(false);

  return (
    // TODO: don't use [0], [1] for translations
    <div className="grid grid-cols-1 bg-[#FAFAFA] px-10 sm:px-0 md:grid-cols-2 md:rtl:pr-48 md:ltr:pl-24">
      <div className="rtl:mr-2 my-20 flex flex-col gap-5 ltr:md:mr-24 md:rtl:ml-40">
        <span className="font-gilda text-2xl leading-8 text-primary md:text-3xl md:ltr:ml-8 md:rtl:mr-8">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
        <div className="gap-2 font-barlow leading-7 text-black md:w-[690px]">
          <p  style={isOpen ? {} : paragraphStyles}
          className="rtl:ml-2 md:ltr:ml-10 md:rtl:mr-10 text-justify">
            {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .titleText
            }
          </p>
          <button className='mt-4 text-primary md:ltr:ml-10 md:rtl:mr-10'
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? t("readLess") : t("readMore")}
          </button>

          
          {/* <span className="font-bold text-primary md:ltr:ml-10 md:rtl:mr-10"> */}
            {/* {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .textTitle
            } */}
          {/* </span> */}
          {/* <ul className="list-decimal md:ltr:ml-16 rtl:mr-8 md:rtl:mr-16">
            {t('itemList', { returnObjects: true }).map(
              (item: string, index: number) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul> */}
        </div>
      </div>
      <div className="hidden items-center ltr:pr-24 rtl:pl-20 md:flex justify-end pl-20">
        <Image
          src="/static/images/Home/KeyDifferentiating/Vector 58.png"
          alt="Landa Key Differentiating"
          width={486}
          height={741}
          loading="lazy"
        />
      </div>
    </div>
  );
}