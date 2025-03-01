"use client"
import { useTranslation } from 'app/i18n/client';
import Image from 'next/image';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';


export default function HomeLandaAcademy() {
    const lang = useLang().lang
    const { t } = useTranslation(lang, 'mainPage');

  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-between gap-10 py-10 md:flex-row md:py-20 ">
      <div className="w-full font-barlow md:w-[47%]  ">
        {/* <p className="mb-2 ltr:tracking-[6px]">{t('Landaholding')}</p> */}
        <h1 className=" mb-2 font-gilda">{t('Landa')}</h1>
        <h1 className="mb-8 font-gilda text-4xl font-bold">{t('Academy')}</h1>
        <p className="leading-8">
            {t('LandaAcademyInfo')}
        </p>
        <div className="mt-6 h-auto w-[224px] p-2">
=======
    <div className="flex justify-center p-10 md:p-32">
        <div className="w-full text-justify font-barlow md:w-[58%]">
            {/* <p className="mb-2 ltr:tracking-[6px]">{t('Landaholding')}</p> */}
            <h1 className="mb-8 ltr:font-gilda rtl:font-EBGaramond text-4xl font-bold md:pt-12">{t('LandaAcademy')}</h1>
            <p className="leading-8">
                {t('LandaAcademyInfo')}
            </p>
            <div className="h-auto w-[224px] mt-6 p-2">
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
          <ButtonRefactor
            text={t('visit')}
            type="link"
            href="https://academy.landaholding.com/"
            bgColor="black"
          />
        </div>
      </div>


      
      <div className="tooltip-success relative flex w-full justify-end gap-3 md:w-[47%]">
        <div
          className={`relative h-72 w-full max-w-xs md:mb-10 md:h-[26rem] `}
        >
          <Image
            loading="lazy"
            className="rounded-lg object-cover"
            src={"/static/images/Home/Academy/academy2.png"}
            alt={"Academy"}
            fill
            sizes="(max-width: 768px) 110vw, (max-width: 1200px) 100vw, 33vw"
          />
        </div>
        <div
          className={`relative  h-72 w-full max-w-xs md:mb-10 md:h-[26rem]  `}
        >
          <Image
            loading="lazy"
            className="rounded-lg object-cover"
            src={"/static/images/Home main/6.jpg"}
            alt={"Academy"}
            fill
            sizes="(max-width: 768px) 110vw, (max-width: 1200px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  )
}