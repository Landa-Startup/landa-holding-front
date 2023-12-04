import { useTranslation } from 'app/i18n';
import * as React from 'react';

export default async function InvestorRegistrationTitle(
  { lang }: { lang: string }
) {

  const { t } = await useTranslation(lang, "investorForm")

  return (
    <>
      <div className='text-center'>
        <p className='mb-20 pt-8 font-serif text-2xl tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t('formTitle')}</p>
      </div>
      <div>
        <p className='mb-4 text-xl lg:text-2xl'>{t('formSubtitle')}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  )
}
