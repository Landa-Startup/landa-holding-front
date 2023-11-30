import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
import { logosLeft } from '../../app/[lang]/statics'
import { logosRight } from '../../app/[lang]/statics'
import { useTranslation } from '../../app/i18n';

export default async function Partners(
  {lang} : {lang: string}
) {

  // const t = langMaker(lang);

  const { t } = await useTranslation(lang, "mainPage")

  return (
    <div>
      <div className="flex flex-col items-center md:grid grid-cols-4 bg-[#FAFAFA] p-5 md:p-16 md:gap-16">

        <div className="grid grid-cols-3 md:grid-cols-2 gap-12 w-[350px] order-1">
          {logosRight.map((role, index) => (
            <Image
              loading='lazy'
              className="w-20 md:w-32 h-20 md:h-32 object-contain"
              key={index}
              src={`/static/images/Home/contact/${role.number}.png`}
              alt={role.alt}
              width={500}
              height={500}
            />
          ))}
        </div>

        <div className="col-span-4 md:col-span-2 gap-6 md:gap-14 md:bg-[#F8F5F0] flex flex-col items-center justify-center p-5 md:p-9 order-2">
          <p className="text-primary text-xl md:text-4xl font-gilda">
            {t('PartnersTitle')}
          </p>
          <p className={`md:w-[222px] md:ml-9 font-barlow text-sm md:text-base font-medium leading-7 ${t('lng') === "en" ? "tracking-[1.6px] md:tracking-[2.4px]" : "tracking-[1px]"} text-black lg:w-[500px] text-center`}>
            {t('PartnersDescription')}
          </p>
          <div>
            <Button
              size="visit"
              goto={t('lng') === "en" ? "en/partner-membership" : "fa/partner-membership"}
              bgColor="Primary"
              lang={lang}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-12 w-[350px] order-3">
          {logosLeft.map((role, index) => (
            <Image
              loading='lazy'
              className="w-20 md:w-32 h-20 md:h-32 object-contain"
              key={index}
              src={`/static/images/Home/contact/${role.number}.png`}
              alt={role.alt}
              width={130}
              height={130}
            />
          ))}
        </div>

      </div>
      <div className="md:hidden flex justify-center items-center  p-5">
        <Button
          size="visit"
          type="button"
          goto={t('lng') === "en" ? "en/partner-membership" : "fa/partner-membership"}
          bgColor="Primary"
          lang={lang}
        />
      </div>
      {/* <PartnersDiamondsContainer/> */}
    </div>
  );
}