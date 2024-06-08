import Image from 'next/image';
import Link from 'next/link';
import StartupsArrowLeft from '../icons/Home/StartupsArrowLeft';

export default function LatestStartupsCard({
  image,
  title,
  description,
  link,
  lang,
}: {
  // TODO: don't pass lang, use zustend
  image: string;
  title: string;
  description: string;
  link: string;
  lang: string;
}) {
  return (
    <Link href={link} target={link}>
      <div className="group relative h-[290px] w-[264px] border border-black hover:shadow-lg md:h-[488px] md:w-[440px] rounded-lg">
        {/* Image Container */}
        <div className="absolute left-0 top-0 h-[254px] w-[264px] md:h-[468px] md:w-[350px]" />

        {/* Image */}
        <Image
          loading="lazy"
          alt={image}
          className="absolute left-[71px] top-2 h-[116px] w-[124px] object-contain transition-all group-hover:scale-110 md:left-[120px] md:top-[18px] md:h-[198px] md:w-[200px]"
          src={image}
          width={500}
          height={500}
        />

        {/* Decorative Lines */}
        <div className={`h-[0px] w-[150px] md:w-[100%] ${lang === "en" ? "left-4" : "right-4"} ${lang === "en" ? "md:left-0" : "md:right-0"} absolute top-[160px] border border-neutral-800 md:top-[295px]`}></div>

        {/* Title */}
        <div className={`absolute font-gilda text-2xl font-normal text-neutral-800 ${lang === "en" ? "left-4 top-[130px] md:top-[250px]" : "right-5 top-[125px] md:top-[255px]"}`}>
          {title}
        </div>

        {/* Description */}
        <div className={`absolute left-[16px] top-[170px] w-[225px] font-barlow text-sm font-normal leading-[15px] text-neutral-800 md:bottom-15 md:top-[310px] md:w-[320px] md:text-base ${lang === "en" ? "text-left right-auto" : "text-right right-5"}`}>
          {description}
        </div>

        {/* Link and Icon */}
        <div className="absolute bottom-[15px] right-[15px] inline-flex h-6 w-6 items-start justify-start gap-2.5 bg-neutral-800 md:left-[378px] md:top-[441px] md:h-10 md:w-10 rounded-lg">
          <StartupsArrowLeft />
        </div>
      </div>
    </Link>
  );
}
