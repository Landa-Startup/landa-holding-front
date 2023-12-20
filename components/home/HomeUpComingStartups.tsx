import React from 'react'
import Image from 'next/image'
import UpcomingStartupsCard from './UpcomingStartupsCard'
import { useTranslation } from 'app/i18n'
import { useLang } from 'stores/langStore'

export default async function HomeUpComingStartups() {

  const { lang } = useLang.getState();

  const { t } = await useTranslation(lang, "mainPage");

  const renderCards = (cardData: Array<{image: string, subTitle: string, text: string, goto: string, buttonText: string}>) => {
    return cardData.map(({image, subTitle, text, goto, buttonText}, index: number) => (
      <UpcomingStartupsCard 
        image={image}
        subTitle={subTitle}
        text={text}
        goto={goto}
        buttonText={buttonText}
        key={index}
      />
    ));
  };

  return (
    <div className='min-h-[400px] mt-12 md:mt-0 mb-8'>
        <div className='relative h-[400px]'>
        <Image
          loading="lazy"
          className="object-cover h-full"
          src="/static/images/upComingStartUps.png"
          alt="Upcoming Startups"
          layout='fill'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>
        <div className='md:p-[32px] flex flex-col justify-start items-center md:items-start mx-3 md:ml-6 md:mr-0 my-4 gap-6'>
            <div className='flex flex-col justify-between items-start md:w-[400px]'>
                <p className='rtl:tracking-0 font-condensed md:text-xl font-normal text-black ltr:tracking-[5.60px]'>{t('upcomingStartups', {returnObjects: true}).landaHolding}</p>
                <p className='tw-[340px] border-b border-black pb-3 text-center font-gilda text-4xl font-normal text-black md:border-none md:text-start'>{t('upcomingStartups', {returnObjects: true}).title}</p>
            </div>
            <div className='flex flex-col items-center md:flex-row gap-8'>
                {renderCards(t('upcomingStartups', { returnObjects: true }).cards)}
            </div>
        </div>
        {/* <UpcomingStartupsCard /> */}
    </div>
  )
}