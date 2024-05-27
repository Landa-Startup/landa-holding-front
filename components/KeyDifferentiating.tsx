'use client'
import { useTranslation } from 'app/i18n/client';
import Image from 'next/image';
// import React, { useState } from 'react'; 

import { useLang } from 'stores/langStore';

// const paragraphStyles: React.CSSProperties = {
//   WebkitLineClamp: 10,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box'
// };

export default function KeyDifferentiating() {

  const lang = useLang().lang;
  
  const { t } = useTranslation(lang, 'aboutUs');

  return (
    // TODO: don't use [0], [1] for translations
    <div className="grid grid-cols-1  px-10 sm:px-0 md:grid-cols-2 md:rtl:pr-20 md:ltr:pl-24">
      <div className="rtl:mr-2 my-20 flex flex-col gap-5 ltr:md:mr-24 md:rtl:ml-40">
        <span className="font-gilda font-bold md:pb-12 text-2xl leading-8 md:text-3xl md:ltr:ml-8 md:rtl:mr-8">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
        <div></div>
<div className='md:pl-9 font-gilda'>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].titleText}
<div className='text-primary'>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].title2}
<div className='text-black'>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text2}
<div className=''>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text3}
<div className=''>{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text4}
<div className=''>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text5}
<div className=''>{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text6}
<div className=''>
{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text7}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
      </div>
      <div className="hidden items-center ltr:pr-24 rtl:pl-20 md:flex md:justify-end md:pl-20 md:pt-20">
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