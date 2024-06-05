"use client"
import { useTranslation } from 'app/i18n/client';
import Image from 'next/image';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';


export default function HomeLandaAcademy() {
    const lang = useLang().lang
    const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="flex justify-between p-10 md:p-20 gap-10">
      <div className="w-full font-barlow md:w-[45%]  ">
        {/* <p className="mb-2 ltr:tracking-[6px]">{t('Landaholding')}</p> */}
        <h1 className=" font-gilda mb-2">{t('Landa')}</h1>
        <h1 className="mb-8 font-gilda text-4xl font-bold">{t('Academy')}</h1>
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


      
      <div className="relative w-[45%] justify-end flex gap-3">
        <div
          className={`relative h-[25rem] w-full max-w-xs md:mb-10 ltr:md:mt-10 `}
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
          className={`relative h-[25rem] w-full max-w-xs md:mb-10 ltr:md:mt-10 `}
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