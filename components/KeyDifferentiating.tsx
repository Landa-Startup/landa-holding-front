import { useTranslation } from 'app/i18n';
import Image from 'next/image';

import { useLang } from 'stores/langStore';

export default async function KeyDifferentiating() {

  const lang = useLang.getState().lang
  const { t } = await useTranslation(lang, 'aboutUs');

  return (
    // TODO: don't use [0], [1] for translations
    <div className="grid grid-cols-1 justify-items-end bg-[#FAFAFA] md:grid-cols-2">
      <div className="m-5 flex flex-col gap-5 rtl:mr-6 md:my-20 md:mr-40 md:rtl:ml-40">
        <span className="font-gilda text-2xl leading-5 text-primary md:text-3xl">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
        <div className="gap-2 font-barlow leading-9 text-black md:w-[350px] lg:w-[450px] xl:w-[550px]">
          <p>
            {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .titleText
            }
          </p>
          <span className="font-bold text-primary">
            {
              t('KeyDifferentiatingFactors', { returnObjects: true })[0]
                .textTitle
            }
          </span>
          <ul className="list-decimal ltr:ml-4 rtl:mr-4">
            {t('itemList', { returnObjects: true }).map(
              (item: string, index: number) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="mt-10 hidden md:block">
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
