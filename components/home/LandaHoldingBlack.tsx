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
<<<<<<< HEAD
    <div className="relative flex flex-col items-stretch justify-evenly  md:gap-10 bg-[#ffffff]  md:py-24 md:flex-row ">
      {/* <Lines /> */}
      <div className="z-10 flex mb-10 px-16 h-[36rem] flex-col md:justify-start gap-5 rtl:mr-1 get-shadow-g md:w-[50%] max-w-[40rem] md:h-auto md:mb-0 rounded-xl">
        <div className="flex flex-col items-center">
            <span className='font-gilda mt-12'>
              {t('LandaHolding')}
            </span>
            <span className="pb-3 font-gilda text-4xl font-bold pt-4 uppercase">
              {t('InvestorCenter')}
=======
    <div className="relative flex flex-col items-center  justify-evenly space-y-5 bg-[#ffffff] py-5 md:h-[590px] md:pt-48 md:pb-32 md:flex-row md:py-10">
      <Lines />
      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1 md:shadow-xl md:w-[620px] md:h-[570px] rounded-xl">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span className="w-[390px] border-b border-black pb-3 text-center ltr:font-gilda rtl:font-EBGaramond text-4xl font-bold text-black md:border-none md:text-start md:ltr:pl-48 md:w-[600px] md:pt-14 md:rtl:pr-16">
              {t('InvestorCenter')}
              <br />
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
            </span>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1=""
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] p-2 md:pb-8 mt-auto">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href="/investor-registration"
            bgColor="black"
          />
        </div>
      </div>
 
<<<<<<< HEAD
      <div className="z-10 flex h-[37rem] px-16 md:justify-start flex-col gap-5 rtl:mr-1 get-shadow-g  md:w-[50%] max-w-[40rem] md:h-auto rounded-xl">
        <div className="flex flex-col items-center">
          <span className='font-gilda mt-12'>
            {t('LandaHolding')}
          </span>
          <span className="pb-2 pt-4 text-center md:text-center font-gilda text-3xl font-bold text-black md:text-4xl md:pt-5">
            {t('EntrepreneurCenter')}
          </span>
=======
      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1 md:pt-8 md:shadow-xl md:w-[620px] md:h-[570px] rounded-xl">
        <div className="flex flex-col w-full items-center self-start md:items-start">
          <div className="flex flex-col pt-4 md:pt-0 w-full">
            <span className="border-b border-black pb-3 pt-4 text-center md:text-center font-gilda rtl:font-EBGaramond text-3xl font-bold text-black md:border-none md:text-4xl md:pt-5">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={''}
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] mt-auto p-2 md:pb-8">
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
