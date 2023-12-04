import { useTranslation } from 'app/i18n';
import React from 'react';

export default async function PartnerMembershipTitle(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "partnerMemberForm")

  return (
    <>
      <div className="text-center">
        <p className="font-serif text-2xl pt-8 mb-20 tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl ">
          {t('formTitle')}
        </p>
      </div>
      <div>
        <p className="text-xl mb-4 lg:text-2xl">{t('formSubtitle')}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  );
}
