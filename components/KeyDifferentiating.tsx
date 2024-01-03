import { useTranslation } from 'app/i18n';
import Image from 'next/image';

import { useLang } from 'stores/langStore';

export default async function KeyDifferentiating() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, 'aboutUs');

  return (
    // TODO: don't use [0], [1] for translations
    <div className="grid grid-cols-1 justify-items-end bg-[#FAFAFA] px-10 sm:px-0 md:grid-cols-2 md:rtl:pr-32">
      <div className="rtl:mr-6md:mr-40 my-20 flex flex-col gap-5 ltr:md:mr-24 md:rtl:ml-40">
        <span className="font-gilda text-2xl leading-8 text-primary md:text-3xl md:ltr:ml-8 md:rtl:mr-8">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
        <div className="gap-2 font-barlow leading-7 text-black md:w-[350px] lg:w-[450px] xl:w-[550px]">
          <p className='md:ltr:ml-10 md:rtl:mr-10'>
            {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .titleText
            }
          </p>
          <span className="font-bold text-primary md:ltr:ml-10 md:rtl:mr-10">
            {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .textTitle
            }
          </span>
          <ul className="list-decimal rtl:mr-8 md:ltr:ml-16 md:rtl:mr-16">
            {t('itemList', { returnObjects: true }).map(
              (item: string, index: number) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="hidden items-end md:flex">
        <Image
          src="/static/images/Home/KeyDifferentiating/Vector 58.png"
          alt="Landa Key Differentiating"
          width={586}
          height={741}
          loading="lazy"
        />
      </div>
    </div>
  );
}
