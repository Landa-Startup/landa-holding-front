import Banner from '@/components/common/Banner';
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
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/handicraft/craft-banner.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/handicraft/craft-banner-mobile.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="mx-8 my-14 flex flex-col justify-center gap-8 md:mx-24">
        <div className="relative flex items-center justify-between my-16">
          <div className=" relative w-[20%]">
            <Image
              className="hidden md:block"
              src="/static/images/landacraft1.png"
              alt="handicraft"
              width={200}
              height={100}
            />
          </div>
          {/* <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          /> */}
          <p className="leading-7 font-gilda w-[75%] text-base ">
            {t('paragraph1')}
          </p>
        </div>
        <div className="relative flex flex-col-reverse items-center justify-between gap-5 overflow-hidden md:flex-row">
          <p className="leading-7 font-gilda text-base w-[47%]">
            {t('paragraph2')}
            <br />
            {/* {t('paragraph3')} */}
          </p>
          {/* <div className="absolute bottom-20 -right-7 h-[650px] w-screen md:hidden"> */}
            {/* <Image
              className=" object-cover opacity-20 md:hidden"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              layout="fill"
            /> */}
          {/* </div> */}
          <div className="relative w-[47%] h-80">
            <Image
              className="object-cover rounded-xl w-full"
              src="/static/images/handicrafts1.jpg"
              alt="handicraft"
              layout="fill"
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-4 mb-16'>
          <div className="relative w-[40%] h-64 ">
            <Image
              className="object-cover rounded-xl w-full"
              src="/static/images/landacraft4.png"
              alt="handicraft"
              layout="fill"
            />
          </div>
          <p className="leading-7 font-gilda text-base w-[55%]">
            {t('paragraph3')}
          </p>

        </div>
        <div className="flex w-full flex-col items-center gap-11 rounded-sm bg-[#F7F3EE] px-8 py-5 my-20">
          <p className="font-gilda text-base leading-[210%] text-[#AA8453]">
            {t('formTitle')}
          </p>
          <HandicraftForm />
        </div>
      </div>
    </div>
  );
}