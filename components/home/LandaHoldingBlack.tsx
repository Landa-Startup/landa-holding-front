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
              {/* {t('LandaHolding')} */}
            </span>
            <span className="w-[340px] border-b border-black pb-3 text-start font-condensed text-4xl font-normal text-black md:border-none">
              {t('InvestorCenter')}
              <br />
            </span>
          </div>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1="w-[320px] md:w-[454px] pr-5"
          style2="space-y-2 mr-8 mt-4"
          style3="leading-4 md:leading-10 text-md"
        />

        <ButtonRefactor
          text={t('signUp')}
          type="link"
          href="/investor-registration"
          bgColor="black"
        />
      </div>

      <div className="z-10 flex h-[28rem] flex-col items-center justify-between rtl:mr-1">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span
              className={`text-base font-normal text-black ${
                t('lng') === 'en' ? 'tracking-[5.60px]' : 'tracking-0 text-xl'
              } font-condensed`}
            >
              {/* {t('LandaHolding')} */}
            </span>
            <span className="w-[340px] border-b border-black pb-3 text-start font-condensed text-4xl font-normal text-black md:border-none">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={`w-[320px] md:w-[550px] pr-6`}
          style2="space-y-2 mr-8"
          style3="leading-4 md:leading-6 text-md"
        />

        <ButtonRefactor
          text={t('signUp')}
          type="link"
          href="/"
          bgColor="black"
        />
      </div>
    </div>
  );
}
