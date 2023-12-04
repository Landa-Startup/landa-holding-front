import { useTranslation } from 'app/i18n';
import * as React from 'react';

export default async function EntrepreneursTitle(
  {lang} : {lang: string}
){

  const { t } = await useTranslation(lang, "entrepreneur")

  return(
    <>
    <div className='text-center'>
<p className='font-serif text-lg pt-8 mb-20 tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl font-weight: 400'>{t('formTitle')}</p>
    </div>
    <div>
      <p className='text-sm mb-4 lg:text-2xl'>{t('personalInfoTitle')}</p>
    </div>
    <div>
    <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
    </div>
    </>
  )
}
