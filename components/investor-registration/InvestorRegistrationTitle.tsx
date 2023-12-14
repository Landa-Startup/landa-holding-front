import React from 'react';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function InvestorRegistrationTitle(
) {

  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, 'formComponent');

  return (
    <>
      <div className='text-center'>
        <p className='mb-20 pt-8 font-condensed text-2xl tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t('investorForm',{ returnObjects: true }).formTitle}</p>
      </div>
      <div>
        <p className='mb-4 text-xl lg:text-2xl'>{t('investorForm',{ returnObjects: true }).formSubtitle}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  )
}
