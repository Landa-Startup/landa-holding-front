import { useTranslation } from 'app/i18n';
import * as React from 'react';

export default async function InvestorRegistrationTitle(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "investorForm")

  return (
    <>
      <div className='text-center'>
        <p className='font-serif text-2xl pt-8 mb-20 tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t('formTitle')}</p>
      </div>
      <div>
        <p className='text-xl mb-4 lg:text-2xl'>{t('formSubtitle')}</p>
      </div>
      <div>
        <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
      </div>
    </>
  )
}
