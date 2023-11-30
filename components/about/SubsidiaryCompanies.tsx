import React from 'react';
import CompaniesContainer from '../home/CompaniesContainer';
import { useTranslation } from 'app/i18n';

export default async function SubsidiaryCompanies(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs")

  return (
    <div className="px-10 md:px-28 py-10 md:py-10">
      <span className="text-3xl md:text-4xl leading-10 font-gilda text-primary">
        {t('subsids', {returnObjects: true})[0].title}
      </span>
      <p className="my-4 font-barlow text-xl leading-8 text-justify">
        {t('subsids', {returnObjects: true})[0].text}
      </p>
      <CompaniesContainer />
    </div>
  );
}
