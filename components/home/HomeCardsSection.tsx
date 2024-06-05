'use client'
import Image from 'next/image';
import ButtonRefactor from '../common/ButtonRefactor';

export default function HomeCardsSection({
  smallTitle,
  text,
  images,
  reverse,
  link,
  titles,
  buttonText
}:{
    smallTitle:string,
    text: string;
    images:Array<{ src: string; alt: string }>;
    reverse: boolean;
    link: string;
    titles:string,
    buttonText: string
}) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-x-10 items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:px-28 md:py-0`}>
      <div className="flex flex-col items-start justify-center md:w-1/2">
        <span className='font-gilda text-1xl md:pb-1 md:text-1xl'>
          {smallTitle}
        </span>
        <span className="lrt:tracking-[6.5px] font-gilda text-4xl md:pb-14 md:text-5xl">
          {titles}
        </span>
        <p className="md:text-md pb-16 text-justify font-EBGaramond text-base leading-[30px] first:mb-0 md:w-full ">
          {text}
        </p>
        <div className='w-1/2 md:w-1/2'>
          <ButtonRefactor text={buttonText} type="link" href={link} />
        </div>
      </div>
      <div className={`hidden ${reverse ? "justify-start" : "justify-end"}  space-x-4 pb-20 rtl:mt-11 rtl:space-x-reverse md:flex md:w-1/2 md:pb-0`}>
        {images.map((image, index) => (
          <div
            className={`relative h-[25rem] w-full max-w-xs md:mb-10 ltr:md:mt-10 `}
            key={index}
          >
            <Image
              loading="lazy"
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 110vw, (max-width: 1200px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
