import { useTranslation } from 'app/i18n';
import * as React from 'react';

export default async function EntrepreneursTitle(
  {lang} : {lang: string}
){

  const { t } = await useTranslation(lang, "entrepreneur")

  return(
    <>
    <div className='text-center'>
<p className='font-weight: 400 mb-20 pt-8 font-serif text-lg tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t('formTitle')}</p>
    </div>
    <div>
      <p className='mb-4 text-sm lg:text-2xl'>{t('personalInfoTitle')}</p>
    </div>
    <div>
    <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
    </div>
    </>
  )
}
