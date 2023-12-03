import React from 'react';
import CompaniesContainer from '../home/CompaniesContainer';
import { useTranslation } from 'app/i18n';

export default async function SubsidiaryCompanies(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs")

  return (
    <div className="p-10 md:px-28 md:py-10">
      <span className="font-gilda text-3xl leading-10 text-primary md:text-4xl">
        {t('subsids', {returnObjects: true})[0].title}
      </span>
      <p className="my-4 text-justify font-barlow text-xl leading-8">
        {t('subsids', {returnObjects: true})[0].text}
      </p>
      <CompaniesContainer />
    </div>
  );
}
