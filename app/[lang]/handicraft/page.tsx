import BannerStartUp from '@/components/common/BannerStartup';
import HandicraftForm from '@/components/common/form/HandicraftForm';
import { useTranslation } from 'app/i18n';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Landa Holding | Handicrafts',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'handicraft');

  return (
    <div>
      <BannerStartUp
        image="/static/images/handicraftBanner.png"
        title={t('bannerTitle')}
        logo="/static/images/handicrafts.svg"
        lang={lang}
      />
      <div className="mx-8 my-14 flex flex-col justify-center gap-8 md:mx-24">
        <div className="relative flex justify-between">
          <div className='relative w-[5000px]'>
          <p className="z-10 text-justify font-barlow text-base font-normal leading-[48px] text-black md:mt-20 ">
            {t('paragraph1')}
          </p>
          <p className="mt-7 text-justify font-barlow text-base font-normal leading-[45px] text-black md:mt-0 md:h-[420px]">
            {t('paragraph2')}
            <br />
            {t('paragraph3')}
          </p>
          </div>
          <div className="pr-6">
            <Image
              className="hidden md:block"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              width={2800}
              height={1000}
            />
          </div>
          <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          />

        </div>
        <div className="relative flex flex-col-reverse justify-between w-ful gap-5 overflow-hidden md:flex-row">

          <div className="absolute bottom-20 -right-7 h-[650px] w-screen md:hidden">
            <Image
              className=" object-cover opacity-20 md:hidden"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              layout="fill"
            />
          </div>
          <div className='flex flex-col'>
          <div className='text-primary text-3xl pb-10'>
          {t('difference-craft', { returnObjects: true }).title}
          </div>
          <div className=' font-barlow text-base font-normal leading-8 md:grid grid-cols-2 gap-5'>
          <li>{t('difference-craft', { returnObjects: true }).item1}</li>
          <li>{t('difference-craft', { returnObjects: true }).item2}</li>
          <li>{t('difference-craft', { returnObjects: true }).item3}</li>
          <li>{t('difference-craft', { returnObjects: true }).item4}</li>
          <li>{t('difference-craft', { returnObjects: true }).item5}</li>
          <li>{t('difference-craft', { returnObjects: true }).item6}</li>

          </div>
          </div>
          
          <div className="relative h-[494px] w-full md:h-[420px] md:w-[565px]">
            <Image
              className="rounded-sm object-cover pb-10"
              src="/static/images/handicrafts1.jpg"
              alt="handicraft"
              layout="fill"
            />
          </div>
        </div>
        <div className=' w-full pb-12'>
        <p className='text-primary justify-strat w-full pb-12 text-2xl md:text-3xl'>
        {t('Advantages-NFT', { returnObjects: true }).title}
        </p>
      <div className='grid gap-4 justify-center md:pl-24 text-base'>
      <li className='btn bg-white  rounded-sm border-primary  md:w-[800px] '>{t('Advantages-NFT', { returnObjects: true }).item1}</li>
        <li className='btn bg-white  rounded-sm border-primary  md:w-[800px] leading-6'>{t('Advantages-NFT', { returnObjects: true }).item2}</li>
        <li className='btn bg-white  rounded-sm border-primary  md:w-[800px] '>{t('Advantages-NFT', { returnObjects: true }).item3}</li>
        <li className='btn bg-white  rounded-sm border-primary  md:w-[800px]'>{t('Advantages-NFT', { returnObjects: true }).item4}</li>
        <li className='btn bg-white rounded-sm border-primary  md:w-[800px] '>{t('Advantages-NFT', { returnObjects: true }).item5}</li>
      </div>
      </div>
      <div className='flex flex-row h-[400px]'>
        
            <Image
              className="hidden md:block"
              src="/static/images/laandacraft.jpg"
              alt="handicraft"
              width={600}
              height={100}
            />
            <div className='md:pr-12 ltr:ml-12'>
            <p className='text-primary text-2xl md:text-3xl md:pb-12'>{t('MembershipBenefits', { returnObjects: true }).title}</p>
            <div className='text-sm pt-12 md:pt-0 md:text-base'>
            <li>{t('MembershipBenefits', { returnObjects: true }).item1}</li>
            <li>{t('MembershipBenefits', { returnObjects: true }).item2}</li>
            <li>{t('MembershipBenefits', { returnObjects: true }).item3}</li>
            <li>{t('MembershipBenefits', { returnObjects: true }).item4}</li>
            </div>

            </div>
            


      </div>
        <div className="flex w-full flex-col items-center gap-11 rounded-sm bg-[#F7F3EE] px-8 py-5">
          <p className="font-openSans text-base font-bold leading-[210%] text-[#AA8453]">
            {t('formTitle')}
          </p>
          <HandicraftForm />
        </div>
      </div>
    </div>
  );
}
