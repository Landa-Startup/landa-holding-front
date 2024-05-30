'use client'
import Image from 'next/image';
import ButtonRefactor from '../common/ButtonRefactor';

export default function HomeCardsSection({
  text,
  images,
  reverse,
  link,
  titles,
  buttonText
}:{
    text: string;
    images:Array<{ src: string; alt: string }>;
    reverse: boolean;
    link: string;
    titles:string,
    buttonText: string
}) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:px-40 md:py-20`}>
      <div className="flex flex-col items-start justify-center md:w-1/2 lg:w-2/5">
        <span className="lrt:tracking-[6.5px] font-gilda text-4xl md:pb-8 md:text-5xl">
          {titles}
        </span>
        <p className="md:text-md pb-20 text-justify font-EBGaramond text-base leading-[30px] first:mb-0 md:w-full ">
          {text}
        </p>
        <div className='w-1/2 md:w-1/3'>
          <ButtonRefactor text={buttonText} type="link" href={link} />
        </div>
      </div>
      <div className="hidden justify-end space-x-7 pb-20 rtl:mt-11 rtl:space-x-reverse md:flex md:w-1/2 md:pb-0 lg:w-3/5">
        {images.map((image, index) => (
          <div
            className={`relative h-96 w-full max-w-xs ${
              index === 0 ? 'md:mb-20 md:first:mt-20 ltr:md:mt-20' : ''
            } ${index === images.length - 1 ? 'last:mt-[5.25rem]' : ''}`}
            key={index}
          >
            <Image
              loading="lazy"
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
