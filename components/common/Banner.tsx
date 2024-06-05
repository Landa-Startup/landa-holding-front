// import { useTranslation } from 'app/i18n';

export default async function Banner({
  image,
  title,
  // lang
}: {
  image: string;
  title: string;
  lang: string;
}) {


  return (
    <div className="relative h-screen md:h-[520px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 h-full md:h-[520px]"
      ></div>

      <div>
        {/* Content Overlay */}
        <div className="">
          <div className="">
            {/* Text Content */}
            {/* <p className={`font-condensed text-xl font-normal text-neutral-50 ltr:tracking-[5.60px]`}>
              {(t('LandaHolding'))}
            </p> */}
            <p className="">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
