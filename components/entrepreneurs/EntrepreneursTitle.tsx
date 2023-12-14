// import { useTranslation } from 'app/i18n';

import { useLang } from 'stores/langStore';

export default async function EntrepreneursTitle(
) {

  const lang = useLang.getState().lang

  // const { t } = await useTranslation(lang, "entrepreneur")

  return (
    <>
      <div className='text-center'>
        <p className='font-weight: 400 mb-20 pt-8 font-condensed text-lg tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>
          {lang === "en" ? "Entrepreneur Center Form" : "فرم مرکز کارآفرینان"}
        </p>
      </div>
      <div>
        <p className='mb-4 text-sm lg:text-2xl'>{lang === "en" ? "Personal Information" : "اطلاعات شخصی"}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  )
}
