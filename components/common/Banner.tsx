'use client'
import { useTranslation } from 'app/i18n/client';

export default async function Banner({
  image,
  // title,
  lang
}: {
  image: string;
  title: string;
  lang: string;
}) {

  const { t } = useTranslation(lang, 'formComponent');

  return (
    <div className="relative h-screen md:h-[550px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 h-full flex items-center px-20"
      >
        <div className='h-auto w-full'>
          <div className='h-auto w-full flex flex-col items-start gap-4'>
            <p className='text-white font-medium font-gilda text-[16px]'>{t('startUp', {returnObjects: true}).LandaHolding}</p>
            <p className='text-white font-gilda font-medium text-[64px]'>{t('startUp', {returnObjects: true}).formBanner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
