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
    <div className="relative flex flex-col items-center  justify-evenly space-y-5 bg-[#ffffff] py-5 md:h-[590px] md:pt-48 md:pb-32 md:flex-row md:py-10">
      <Lines />
      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1 md:shadow-xl md:w-[620px] md:h-[570px] rounded-xl">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span className="w-[390px] border-b border-black pb-3 text-center ltr:font-gilda rtl:font-EBGaramond text-4xl font-bold text-black md:border-none md:text-start md:ltr:pl-48 md:w-[600px] md:pt-14 md:rtl:pr-16">
              {t('InvestorCenter')}
              <br />
            </span>
          </div>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1="w-[360px] md:w-[700px] md:ltr:pl-12 rtl:md:pr-24 rtl:pr-12"
          style2="space-y-2"
          style3="pt-4"
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
            <span className="border-b border-black pb-3 pt-4 text-center md:text-center font-gilda rtl:font-EBGaramond text-3xl font-bold text-black md:border-none md:text-4xl md:pt-5">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={`w-[360px] md:w-[700px] md:pl-12 md:rtl:pr-16 rtl:pr-12`}
          style2="space-y-0 md:mr-8"
          style3="pt-4"
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
