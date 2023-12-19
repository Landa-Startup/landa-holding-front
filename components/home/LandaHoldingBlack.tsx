import Link from 'next/link';
import React from 'react';
import Lines from '@/components/icons/LandaHoldingBlack/Lines';
import ButtonArrow from '@/components/icons/LandaHoldingBlack/ButtonArrow';
import UlList from '@/components/List/UlList';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default async function LandaHoldingBlack() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="md:pr-40' relative flex flex-col items-center  justify-evenly space-y-5 bg-[#ffffff] py-5 md:h-[590px] md:flex-row md:justify-between md:py-10 md:pr-20 ltr:md:pl-36 rtl:md:pl-20">
      <Lines />
      <div className="z-10 flex h-[28rem] flex-col justify-between rtl:mr-1">
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
          style2="space-y-2 mr-8 mt-4"
          style3="leading-4 md:leading-10 text-md"
        />

        <button
          className={`relative mx-auto mt-10 inline-flex items-center justify-center gap-4 ${
            t('lng') === 'en' ? '' : 'flex-row-reverse'
          } group h-6 rounded-sm bg-[#222222] p-5 md:self-center md:p-6`}
        >
          <Link href={'/investor-registration'}>
            <div className="pb-3 font-condensed text-[24px] font-normal leading-6 tracking-[1.5px] text-white md:text-[32px]">
              {t('register')}
            </div>
          </Link>
          <div className="flex items-start justify-start gap-2.5">
            <div className="relative h-5 w-5">
              <div className="absolute inset-0 border border-black bg-black opacity-0 transition duration-1000 ease-in-out hover:opacity-100"></div>
              <div className="h-full w-full border border-white pb-3">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="z-10 flex px-5 h-[28rem] flex-col justify-between rtl:mr-1">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span
              className={`text-base font-normal text-black ${
                t('lng') === 'en' ? 'tracking-[5.60px]' : 'tracking-0 text-xl'
              } font-condensed`}
            >
              {t('LandaHolding')}
            </span>
            <span className="border-b border-black pb-3 text-center font-gilda text-4xl font-normal text-black md:border-none md:text-start">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={`w-[320px] md:w-[600px] pr-6`}
          style2="space-y-2 mr-8"
          style3="leading-4 md:leading-10 text-md"
        />

        <button className="group mx-auto relative mt-10 inline-flex h-6 items-center justify-center gap-4 rounded-sm bg-[#222222] p-5 rtl:flex-row-reverse md:self-center md:p-6">
          <Link href={'/entrepreneurs'}>
            <div className="pb-3 font-condensed text-[24px] font-normal leading-6 tracking-[1.5px] text-white md:text-[32px]">
              {t('register')}
            </div>
          </Link>
          <div className="flex items-start justify-start gap-2.5">
            <div className="relative h-5 w-5">
              <div className="absolute inset-0 border border-black bg-black opacity-0 transition duration-1000 ease-in-out hover:opacity-100"></div>
              <div className="h-full w-full border border-white pb-3">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
