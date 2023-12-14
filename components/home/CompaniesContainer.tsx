'use client'

import CompaniesCard from './CompaniesCard';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function CompaniesContainer() {
  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, 'aboutUs');

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
