import Image from 'next/image';
import React from 'react';

export default function HomeCardsRight({
  images,
  titles,
  link,
  lang
}: {
  titles: string;
  images: Array<{ src: string; alt: string }>;
  link: string;
  lang: string;
}) {
  return (
    <div className="flex flex-col self-start md:self-center">
      <div className="mt-9 flex flex-col items-start space-y-2 md:mt-0 md:items-center">
        <div className="flex flex-col rtl:flex-row-reverse gap-2">
          <span className="font-condensed text-3xl ltr:tracking-[11px]">{lang === "en" ? "LANDA" : "لاندا"}</span>
          <span className="font-gilda text-4xl lrt:tracking-[6.5px] md:text-6xl">
            {titles}
          </span>
        </div>
      </div>
      <div className="flex space-x-7 rtl:space-x-reverse">
        {images.map((image, index) => (
          <div
            className={`relative mt-5 hidden h-96 w-64 ${
              lang === 'en' ? 'last:mt-14' : 'last:mt-[5.25rem]'
            } md:block md:first:mt-44 lg:mb-0`}
            key={index}
          >
            <Image
              loading="lazy"
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
