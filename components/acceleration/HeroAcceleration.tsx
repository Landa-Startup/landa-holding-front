import Image from 'next/image';
import { useTranslation } from 'app/i18n';
import ButtonRefactor from '../common/ButtonRefactor';

//TODO: hero components
export default async function Hero({
  showLanda,
  leftImage,
  showButton,
  lang
}: {
  showLanda: boolean;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
  lang: string;
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div
      style={{
        backgroundImage: `url('/static/images/acceleration/banner.png')`,
        backgroundSize: 'cover',
        backgroundPositionX: '65%'
      }}
      className="relative h-[calc(100vh)] overflow-hidden md:h-screen"
    >
      <div className="flex flex-col items-center justify-center space-y-5 py-36 md:h-screen">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center font-barlow text-2xl font-normal text-white ltr:tracking-[7px] md:text-4xl ltr:md:tracking-[12.6px]`}
        >
          {t('LandaHolding')}
        </div>
        <div className="text-center font-gilda text-4xl text-[#F8F5F0] ltr:tracking-[6.4px] md:text-6xl">
          {t('AccelerationCenter')}
        </div>

        {showButton ? (
          // <Button
          //   text={t('lng') === "en" ? "Register Now" : "همین الان ثبت نام کنید"}
          //   size="notVisit"
          //   goto="/StartupsForm"
          //   bgColor="Primary"
          //   lang={lang}
          // />
          <ButtonRefactor
            text={t('lng') === 'en' ? 'Register Now' : 'همین الان ثبت نام کنید'}
          />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="absolute -right-16 bottom-0 mr-0  h-[420px] w-[365px] sm:h-[302px] sm:w-[305px] md:right-0 md:mr-0   md:h-[372px] md:w-[265px] xl:h-[560px] xl:w-[420px] "
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
