"use client"
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
// import ArrowRight from '../icons/common/ArrowRight';


export default function HomeLandaAcademy() {
    const lang = useLang().lang
    const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="flex justify-center p-10 md:p-32">
        <div className="w-full text-justify font-barlow md:w-[38%]">
            <p className="mb-2 ltr:tracking-[6px]">{t('Landaholding')}</p>
            <h1 className="mb-8 font-gilda text-4xl font-bold">{t('LandaAcademy')}</h1>
            <p className="leading-8">
                {t('LandaAcademyInfo')}
            </p>
            <button className=" my-6 flex items-center rounded-md bg-primary px-10 py-2 text-white ltr:flex-row-reverse">{t('visit')}  </button>
            
        </div>
        
        <div className="relative hidden w-[58%] md:block">
            <div className="absolute right-0 top-10 h-[336px] w-[576px] bg-[#F7F3EE] rtl:left-0 rtl:right-auto "></div>
            <div className="absolute right-60 top-56 h-[228px] w-[448px] bg-[#DDCEBA] rtl:left-60 rtl:right-auto"></div>
        </div>
    </div>
  )
}