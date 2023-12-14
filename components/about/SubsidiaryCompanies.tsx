
import CompaniesContainer from '../home/CompaniesContainer';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default async function SubsidiaryCompanies(
) {

  const lang = useLang.getState().lang
  const { t } = await useTranslation(lang, "aboutUs")

  return (
    <div className="p-10 md:px-28 md:py-10">
      <span className="font-gilda text-3xl leading-10 text-primary md:text-4xl">
        {t('subsids', { returnObjects: true }).title}
      </span>
      <p className="my-4 text-justify font-barlow text-xl leading-8">
        {t('subsids', { returnObjects: true }).text}
      </p>
      <CompaniesContainer />
    </div>
  );
}
