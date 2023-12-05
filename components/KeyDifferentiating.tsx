import { items } from 'app/[lang]/statics';
import { useTranslation } from 'app/i18n';
import Image from 'next/image';
import React from 'react';

export default async function KeyDifferentiating(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs")
 
  return (
    <div className="grid grid-cols-1 justify-items-end bg-[#FAFAFA] md:grid-cols-2">
      <div className="m-5 flex flex-col gap-5 md:my-20 md:ml-28">
        <span className="font-gilda text-2xl leading-5 text-primary md:text-3xl">
          Key Differentiating Factors:
        </span>
        <div className="gap-2 font-barlow leading-6 text-black md:w-[350px] lg:w-[450px] xl:w-[550px]">
          <p>
            First and foremost, it&apos;s essential to understand that the most
            critical aspect is the mental model and perspective behind these key
            differentiating factors. The way we perceive and approach a business
            can create various points of distinction.
          </p>
          <span className="font-bold text-primary">What sets us apart:</span>
          <ul className='ml-4 list-decimal'>
            {t('itemList', {returnObjects: true}).map(({item}: {item: string}) => (
              <li>
                {item}
              </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="group mt-10 hidden md:block">
        <Image
          className="duration-2000 group-hover:animate-pulse "
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
