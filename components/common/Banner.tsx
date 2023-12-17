import { useTranslation } from 'app/i18n';

export default async function Banner({
  image,
  title,
  lang
}: {
  image: string;
  title: string;
  lang: string;
}) {

  const { t } = await useTranslation(lang, "aboutUs")

  return (
    <div className="relative h-screen md:h-[520px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-full blur-[2px] md:h-[520px] absolute inset-0"
      ></div>

      <div
        className="relative flex h-full items-center justify-center lg:h-[520px]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Adding overlay with transparency
      >
        {/* Content Overlay */}
        <div className="relative flex h-full items-stretch justify-center lg:h-[520px] lg:justify-start">
          <div className="flex flex-col items-center justify-center text-center md:m-auto lg:m-auto">
            {/* Text Content */}
            <p className={`font-condensed text-xl font-normal text-neutral-50 ltr:tracking-[5.60px]`}>
              {(t('LandaHolding'))}
            </p>
            <p className="font-gilda text-[32px] font-normal text-neutral-50 md:text-[50px] lg:text-[50px] xl:text-[50px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
