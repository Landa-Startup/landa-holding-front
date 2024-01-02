import React from 'react';
import Lines from '@/components/icons/LandaHoldingBlack/Lines';
import UlList from '@/components/List/UlList';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

export default async function LandaHoldingBlack() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="md:pr-40' relative flex flex-col items-center  justify-evenly space-y-5 bg-[#ffffff] py-5 md:h-[590px] md:flex-row md:justify-between md:py-10 md:pr-20 ltr:md:pl-36 rtl:md:pl-20">
      <Lines />
      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span className="rtl:tracking-0 font-condensed text-xl font-normal text-black ltr:tracking-[5.60px]">
              {t('LandaHolding')}
            </span>
            <span className="w-[340px] border-b border-black pb-3 text-center font-gilda text-4xl font-normal text-black md:border-none md:text-start">
              {t('InvestorCenter')}
              <br />
            </span>
          </div>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1="w-[320px] md:w-[454px] pr-5"
          style2="space-y-2 mr-8"
          style3="pt-4"
        />

        <div className='h-auto w-[224px] p-2'>
        <ButtonRefactor
          text={t('signUp')}
          type="link"
          href="/"
          bgColor="black"
        />
        </div>
      </div>

      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1">
        <div className="flex flex-col w-full items-center self-start md:items-start">
          <div className="flex flex-col w-full pt-4 md:pt-0">
            <span
              className={`text-base font-normal text-black ${t('lng') === 'en' ? 'tracking-[5.60px]' : 'tracking-0 text-xl'
                } font-condensed`}
            >
              {t('LandaHolding')}
            </span>
            <span className="border-b border-black pb-3 text-center font-gilda text-3xl font-normal text-black md:border-none md:text-start md:text-4xl">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={`w-[320px] md:w-[600px] pr-10`}
          style2="space-y-0 md:mr-8"
          style3="pt-4"
        />

        <div className='h-auto w-[224px] p-2'>
        <ButtonRefactor
          text={t('signUp')}
          type="link"
          href="/"
          bgColor="black"
        />
        </div>
      </div>
    </div>
  );
}