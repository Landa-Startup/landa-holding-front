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
    <div className="relative h-screen md:h-auto">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-full lg:h-[512px] absolute inset-0"
      ></div>

      <div className="h-[250px] lg:h-[512px] justify-center lg:justify-start flex items-stretch relative ">
        <div className="flex flex-col justify-center items-center text-center lg:m-auto md:m-auto mt-4">
          <p className={`text-neutral-50 text-base font-normal ${t('lng') === "en" ? "tracking-[5.60px]" : "tracking-[2px]"} font-condensed`}>
            {t('LandaHolding')}
          </p>
          <p className="text-neutral-50 text-[32px] font-normal font-gilda md:text-[50px] lg:text-[74px] xl:text-[84px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
