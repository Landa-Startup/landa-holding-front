import Link from 'next/link';
import React from 'react';
import Lines from '../icons/LandaHoldingBlack/Lines';
import ButtonArrow from '../icons/LandaHoldingBlack/ButtonArrow';
import UlList from '../List/UlList';
import Button from '../common/Button';
import { useTranslation } from 'app/i18n';

export default async function LandaHoldingBlack(
  {lang} : {lang: string}
) {
  const { t } = await useTranslation(lang, "mainPage")

  const L1EN = ['Global investment opportunities within your reach.', 'Access to a network of successful entrepreneurs and investors.', 'Exclusive insights and expert analysis for informed decisions.', 'Collaborative environment for joint ventures and partnerships.', 'Accelerated growth potential through diversified investments.']
  const L2EN = ['Global networking opportunities for collaboration and partnerships', 'Access to all videos of pitches, industry trend presentations and panel discussions.', 'Attending events of the entrepreneurs center', 'Meetings with top business leaders and entrepreneurs', 'Participation in seasonal meetings with other international entrepreneurs .' , 'Online platform for connecting with other entrepreneurs']
  
  const L1FA = ["فرصت های سرمایه گذاری جهانی در دسترس شماست", "دسترسی به شبکه ای از کارآفرینان و سرمایه گذاران موفق", "بینش انحصاری و تجزیه و تحلیل تخصصی برای تصمیم گیری آگاهانه", "محیط همکاری برای سرمایه گذاری مشترک و مشارکت", "پتانسیل رشد سریع از طریق سرمایه گذاری های متنوع"]
  const L2FA = ["فرصت های شبکه جهانی برای همکاری و مشارکت", "دسترسی به تمام ویدئوهای مربوط به زمین، ارائه روند صنعت و بحث های پنل", "حضور در رویدادهای مرکز کارآفرینان", "جلسات با رهبران برتر کسب و کار و کارآفرینان", "شرکت در جلسات فصلی با سایر کارآفرینان بین المللی", "پلتفرم آنلاین برای ارتباط با سایر کارآفرینان"]

  return (
    <div className={`flex flex-col justify-evenly md:flex-row md:justify-between ${t('lng') === "en" ? "md:pl-36 md:pr-20" : "md:pl-20 md:pr-40"} relative items-center space-y-5 bg-[#ffffff] py-5 md:h-[590px] md:py-10`}>
      <Lines />
      <div className="flex flex-col justify-around space-y-6 pt-8">
        <div className="flex flex-col items-center self-start md:items-start">
          <div className="flex flex-col">
            <span className={`text-base font-normal text-black ${t('lng') === "en" ? "tracking-[5.60px]" : "text-xl tracking-[2px]"} font-condensed`}>
              {t('LandaHolding')}
            </span>
            <span className="w-[340px] border-b border-black pb-3 text-center font-gilda text-4xl font-normal text-black md:border-none md:text-start">
              {t('InvestorCenter')}
              <br />
            </span>
          </div>
        </div>

        <UlList
          list={t('lng') === "en" ? L1EN : L1FA} 
          style1='w-[320px] md:w-[454px] pr-6'
          style2='space-y-2 mr-8 mt-4'
          style3='leading-4 md:leading-10 text-md'
        />

        <button className={`relative mt-10 inline-flex items-center justify-start gap-4 ${t('lng') === "en" ? "" : "flex-row-reverse"} group h-6 rounded-sm bg-[#222222] p-5 md:self-center md:p-6`}>
          <Link href={'/investor-registration'}>
            <div className="pb-3 font-condensed text-[24px] font-normal leading-6 tracking-[1.5px] text-white md:text-[32px]">
              {t('lng') === "en" ? "Register" : "ثبت نام"}
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

      <div className="z-10 flex flex-col justify-around space-y-6 pt-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col">
            <span className={`text-base font-normal text-black ${t('lng') === "en" ? "tracking-[5.60px]" : "text-xl tracking-[2px]"} font-condensed`}>
              {t('LandaHolding')}
              <br />
            </span>
            <span className="w-[340px] border-b border-black pb-3 text-center  font-gilda text-4xl font-normal text-black md:border-none md:text-start">
              {t('EntrepreneurCenter')}
              <br />
            </span>
          </div>
        </div>

        <UlList
          list={t('lng') === "en" ? L2EN : L2FA}  
          style1={`w-[380px] md:w-[500px] ${t('lng') === "en" ? "pr-6" : "pl-6"}`}
          style2='space-y-2'
          style3='leading-4 md:leading-10 text-md'
        />
        <button className={`relative mt-10 inline-flex items-center justify-start gap-4 ${t('lng') === "en" ? "" : "flex-row-reverse"} group h-6 rounded-sm bg-[#222222] p-5 md:self-center md:p-6`}>
          <Link href={'/entrepreneurs'}>
            <div className="pb-3 font-condensed text-[24px] font-normal leading-6 tracking-[1.5px] text-white md:text-[32px]">
              {t('lng') === "en" ? "Register" : "ثبت نام"}
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
