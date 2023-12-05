import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
export default function CompaniesCard({
  name,
  logo,
  link
}: {
  name: string;
  logo: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="flex h-[160px] w-[145px] flex-col items-center justify-between rounded-sm bg-[#F7F3EE] md:h-[170px] md:w-[192px]">
        <div className="relative h-[138px] w-[138px]">

          <Image
            className="object-contain p-1"
            src={`/static/images/About/companies/${logo}`}
            alt="Landa Companies"
            layout="fill"
          />

        </div>
        <span className="w-full bg-neutral-500 py-2 text-center font-gilda text-sm leading-6 text-white md:text-lg ">
          {name}
        </span>
      </div>
    </Link>
  );
}
