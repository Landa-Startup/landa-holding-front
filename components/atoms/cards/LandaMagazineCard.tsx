import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LandaMagazineCard({
  title,
  image,
  type,
  date,
}: {
  title: string;
  image: string;
  type: string;
  date: string;
}) {
  return (
    <Link className="w-[391px] h-[476px] group relative" href={'/'}>
      <Image src={image} alt={image} width={500} height={500} />
      <div className="w-[46px] h-[84px] px-1 py-2.5 border border-white flex-col justify-start items-center gap-[15px] inline-flex absolute top-8 left-8">
        <div className="w-[31px] h-[17px] text-white text-[15px] font-normal font-gilda">
          apr
        </div>
        <div className="w-[38px] h-8 text-white text-[32px] font-normal font-gilda">
          27
        </div>
      </div>
      <div className="w-[306px] h-36 px-11 py-[13px] bg-stone-100 flex-col justify-start items-start gap-[7px] inline-flex top-[397px] left-10 absolute group-hover:top-[280px] group-hover:transition-all">
        <div className="text-stone-500 text-base font-normal tracking-[5.60px] font-condensed">
          {type}
        </div>
        <div className="w-[218px] text-black text-[32px] font-normal font-gilda">
          {title}
        </div>
      </div>
    </Link>
  );
}
