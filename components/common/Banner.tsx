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
    <div className="relative h-screen md:h-[650px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 h-screen md:h-[650px] blur-[2px] lg:h-[512px]"
      ></div>

      <div
        className="relative flex h-[650px] items-center justify-center lg:h-[512px]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Adding overlay with transparency
      >
        {/* Content Overlay */}
        <div className="relative flex h-[650px] items-stretch justify-center lg:h-[512px] lg:justify-start">
          <div className="flex flex-col items-center justify-center text-center md:m-auto lg:m-auto">
            {/* Text Content */}
            <p className={`font-condensed text-base font-normal ${lang === "en" ? "tracking-[5.60px]" : "tracking-normal"} text-neutral-50`}>
              {(t('LandaHolding'))}
            </p>
            <p className="font-gilda text-[32px] font-normal text-neutral-50 md:text-[50px] lg:text-[74px] xl:text-[84px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
