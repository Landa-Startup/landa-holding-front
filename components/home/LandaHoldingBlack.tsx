'use client'
import React from 'react';
import Lines from '@/components/icons/LandaHoldingBlack/Lines';
import UlList from '@/components/List/UlList';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

export default function LandaHoldingBlack() {
  const lang = useLang().lang;
  const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="relative flex flex-col items-center justify-evenly bg-[#ffffff] py-5 md:h-[590px] md:py-32 md:flex-row">
      <Lines />
      <div className="z-10 flex mb-36 h-[28rem] flex-col items-center justify-between rtl:mr-1 md:shadow-xl md:w-[620px] md:h-[570px] md:mb-0  rounded-xl">
        <div className="flex flex-col items-center">
            <span className='font-gilda pt-8'>
              {t('LandaHolding')}
            </span>
            <span className="pb-3 font-gilda text-4xl font-bold pt-4">
              {t('InvestorCenter')}
            </span>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1="w-[360px] md:w-[700px] md:ltr:pl-12 rtl:md:pr-24 rtl:pr-12"
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto w-[224px] mt-6 p-2 md:pb-8">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href="/investor-registration"
            bgColor="black"
          />
        </div>
      </div>
 
      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1 md:pt-8 md:shadow-xl md:w-[620px] md:h-[570px] rounded-xl">
        <div className="flex flex-col w-full items-center self-start md:items-start">
          <div className="flex flex-col pt-4 md:pt-0 w-full">
          <span className=' text-center font-gilda'>
              {t('LandaHolding')}
            </span>
            <span className="border-b border-black pb-3 pt-4 text-center md:text-center font-gilda text-3xl font-bold text-black md:border-none md:text-4xl md:pt-5">
              {t('EntrepreneurCenter')}
            </span>
          </div>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={`w-[360px] md:w-[700px] md:pl-12 md:rtl:pr-16 rtl:pr-12`}
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto w-[224px] mt-6 p-2 md:pb-8">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href="/formEntrepreneurs"
            bgColor="black"
          />
        </div>
      </div>
    </div>
  );
}
