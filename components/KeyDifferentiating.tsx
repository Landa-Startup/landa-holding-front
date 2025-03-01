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
    <div className="flex justify-between ">
      <div className=" my-20 flex flex-col gap-5 w-full md:w-[62%]">
        <span className="font-gilda font-bold md:pb-8 text-2xl leading-8 md:text-4xl">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
<<<<<<< HEAD
        <div className='font-gilda text-justify'>
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
=======
        <div></div>
<div className='md:pl-9 text-justify md:rtl:mr-8'>
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
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
      </div>
      <div className="hidden items-center w-[30%] md:flex md:justify-end">
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