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
      <div className=" my-14 flex flex-col justify-center gap-8 md:mx-24">
        <div className="relative flex">
          <div className="pr-6 md:pb-24">
            <Image
              className="hidden md:block rtl:md:w-[300px]"
              src="/static/images/landacraft1.png"
              alt="handicraft"
              width={800}
              height={100}
            />
          </div>
          {/* <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          /> */}
          <p className="z-10 mx-8 text-justify font-barlow text-base font-normal leading-[48px] text-black md:mr-10 md:mt-20 md:pl-20">
            {t('paragraph1')}
          </p>
        </div>
        <div className="relative flex flex-col-reverse justify-between gap-5 overflow-hidden md:flex-row">
          <p className="mt-7 mx-8 md:pt-20 text-justify font-barlow text-base font-normal leading-[45px] text-black md:mt-0 md:h-[480px] md:w-[652px] rtl:pr-5 ltr:pl-5">
            {t('paragraph2')}
            <br />
            {/* {t('paragraph3')} */}
          </p>
          <div className="absolute bottom-20 -right-7 h-[650px] w-screen md:hidden">
            {/* <Image
              className=" object-cover opacity-20 md:hidden"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              layout="fill"
            /> */}
          </div>
          <div className="relative h-[294px] md:h-[360px] md:w-[765px]">
            <Image
              className="object-cover rounded-xl w-full"
              src="/static/images/handicrafts1.jpg"
              alt="handicraft"
              layout="fill"
            />
          </div>
        </div>
        <div className="relative flex">
          <div className="pr-6 md:pt-">
            <Image
              className="hidden md:block md:w-[3500px] md:h-[350px]"
              src="/static/images/landacraft4.png"
              alt="handicraft"
              width={800}
              height={100}
            />
          </div>
          {/* <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          /> */}
          <p className="z-10 mx-8 text-justify font-barlow text-base font-normal leading-[48px] text-black md:mr-10 md:mt-6 md:pl-20 rtl:md:w-[2800px] md:rtl:pt-12">
            {t('paragraph3')}
          </p>
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