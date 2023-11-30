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
    <div className={`flex flex-col md:flex-row justify-evenly md:justify-between ${t('lng') === "en" ? "md:pr-20 md:pl-36" : "md:pr-40 md:pl-20"} items-center relative bg-[#ffffff] py-5 md:py-10 space-y-5 md:h-[590px]`}>
      <Lines />
      <div className="flex flex-col justify-around space-y-6 pt-8">
        <div className="flex flex-col md:items-start items-center self-start">
          <div className="flex flex-col">
            <span className={`text-black text-base font-normal ${t('lng') === "en" ? "tracking-[5.60px]" : "tracking-[2px] text-xl"} font-condensed`}>
              {t('LandaHolding')}
            </span>
            <span className="text-black text-4xl font-gilda font-normal border-b md:border-none border-black w-[340px] pb-3 text-center md:text-start">
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

        <button className={`relative justify-start items-center gap-4 mt-10 inline-flex ${t('lng') === "en" ? "" : "flex-row-reverse"} md:self-center h-6 group bg-[#222222] p-5 md:p-6 rounded-sm`}>
          <Link href={'/investor-registration'}>
            <div className="text-white text-[24px] md:text-[32px] pb-3 font-normal leading-6 tracking-[1.5px] font-condensed">
              {t('lng') === "en" ? "Register" : "ثبت نام"}
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 bg-black border border-black transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border pb-3 border-white">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="flex flex-col justify-around space-y-6 pt-8 z-10">
        <div className="flex flex-col md:items-start items-center">
          <div className="flex flex-col">
            <span className={`text-black text-base font-normal ${t('lng') === "en" ? "tracking-[5.60px]" : "tracking-[2px] text-xl"} font-condensed`}>
              {t('LandaHolding')}
              <br />
            </span>
            <span className="text-black text-4xl font-gilda font-normal border-b  md:border-none border-black w-[340px] pb-3 text-center md:text-start">
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
        <button className={`relative justify-start items-center gap-4 mt-10 inline-flex ${t('lng') === "en" ? "" : "flex-row-reverse"} md:self-center h-6 group bg-[#222222] p-5 md:p-6 rounded-sm`}>
          <Link href={'/entrepreneurs'}>
            <div className="text-white text-[24px] md:text-[32px] tracking-[1.5px] font-normal pb-3 leading-6 font-condensed">
              {t('lng') === "en" ? "Register" : "ثبت نام"}
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 bg-black border border-black transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border pb-3 border-white">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
