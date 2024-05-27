'use client'
import CompaniesContainer from '../home/CompaniesContainer';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function SubsidiaryCompanies(
) {

  const lang = useLang().lang

  const { t } = useTranslation(lang, "aboutUs")

  return (
    <div className="px-10 md:py-10">
      <div>
      {t('', { returnObjects: true }).title}
      </div>
      <span className="font-gilda text-3xl leading-10 md:px-16 md:text-4xl">
        {t('SubsidiaryCompanies', { returnObjects: true }).title}
      </span>
      <p className="my-4 text-justify font-barlow text-lg md:px-16 leading-8 md:pt-12">
        {t('SubsidiaryCompanies', { returnObjects: true }).text}
      </p>
      <CompaniesContainer />
    </div>
  );
}
