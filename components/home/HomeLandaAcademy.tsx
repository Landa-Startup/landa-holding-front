"use client"
import { useTranslation } from 'app/i18n/client';
import Image from 'next/image';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';
// import ArrowRight from '../icons/common/ArrowRight';


export default function HomeLandaAcademy() {
    const lang = useLang().lang
    const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="flex justify-center p-10 md:p-32">
        <div className="w-full text-justify font-barlow md:w-[58%]">
            {/* <p className="mb-2 ltr:tracking-[6px]">{t('Landaholding')}</p> */}
            <h1 className="mb-8 font-gilda text-4xl font-bold md:pt-12">{t('LandaAcademy')}</h1>
            <p className="leading-8">
                {t('LandaAcademyInfo')}
            </p>
            <div className="mt-6 h-auto w-[224px] p-2">
          <ButtonRefactor
            text={t('visit')}
            type="link"
            href="https://academy.landaholding.com/"
            bgColor="black"
          />
            </div>
        </div>
        
        <div className="relative hidden w-[58%] justify-between md:block">
            <div className="left-100 absolute right-5 top-10 h-[368px] w-[256px] rtl:left-0 rtl:right-auto">
                <Image src="/static/images/Home/Academy/academy1.png" alt="academy" layout="fill" objectFit="contain" />
            </div>
            <div className="right-100 absolute top-10 h-[368px] w-[628px]  md:rtl:left-20 md:rtl:right-auto">
            <Image src="/static/images/Home/Academy/academy2.png" alt="academy" layout="fill" objectFit="contain"/>
 
            </div>
        </div>
    </div>
  )
}