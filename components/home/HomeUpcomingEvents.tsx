import { useTranslation } from 'app/i18n'
import React from 'react'
import { useLang } from 'stores/langStore'

export default async function HomeUpcomingEvents() {

  const lang = useLang.getState().lang

  const { t } =  await useTranslation(lang, "mainPage")  

  return (
    <div className='min-h-[400px] bg-[#F8F5F0]'>
        <div className='relative'>
            <div className='absolute rtl:right-28 p-2 md:rtl:right-48 left-20 md:left-[185px] md:top-[29px] rtl:md:top-[24px] md:text-4xl'>
                <h3 className='font-gilda font-normal text-2xl md:text-4xl text-neutral-800'>
                    {t('upcomingEvents', {returnObjects: true}).title}
                </h3>
            </div>
        </div>
        <div className='relative'>
            <div className="absolute ltr:left-10 rtl:right-10 top-[52px] hidden h-[313.88px] w-16 rtl:md:right-[121px] ltr:md:left-[121px] md:block">
                <div className="absolute rtl:right-0 ltr:left-0 top-0 ltr:top-[307px] h-0 w-[306px] origin-top-right ltr:origin-top-left -rotate-90 border border-neutral-800 bg-neutral-800"></div>
                <div className="absolute rtl:right-0 ltr:left-0 top-[103.03px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
                <div className="absolute rtl:right-0 ltr:left-0 top-[305px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
                <div className="absolute rtl:right-0 ltr:left-0 top-0 h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
                <div className="absolute rtl:right-0 ltr:left-0 top-[198.51px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
                <div className="absolute rtl:right-14 ltr:left-14 top-[97px] h-3 w-3 rounded-full border border-neutral-800 bg-neutral-800" />
                <div className="absolute rtl:right-14 ltr:left-14 top-[194px] h-3 w-3 rounded-full border border-neutral-800 bg-neutral-800" />
                <div className="absolute rtl:right-14 ltr:left-14 top-[300px] h-3 w-3 rounded-full border border-neutral-800 bg-neutral-800" />
            </div>
        </div>
    </div>
  )
}