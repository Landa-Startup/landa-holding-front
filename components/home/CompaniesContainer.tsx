import React from 'react';
import CompaniesCard from './CompaniesCard';
// TODO: read companies from i18n instead of statics
// import { companies } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function CompaniesContainer({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, 'aboutUs');

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-14 lg:grid-cols-5 xl:grid-cols-5 ">
      {t('companies', { returnObjects: true }).map(
        (
          { name, logo, link }: { name: string; logo: string; link: string },
          index: number
        ) => (
          <CompaniesCard key={index} name={name} logo={logo} link={link} />
        )
      )}
    </div>
  );
}
