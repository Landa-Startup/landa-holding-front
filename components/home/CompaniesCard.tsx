import Image from 'next/image';

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
      <div className="flex h-[160px] w-[145px] flex-col items-center  justify-between bg-[#F7F3EE] md:h-[240px] md:w-[322px] rounded-xl">
        <div className="relative h-[138px] w-[138px]">

          <Image
            className="object-contain md:pt-12"
            src={`/static/images/About/companies/${logo}`}
            alt="Landa Companies"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

        </div>
        <span className="w-full bg-neutral-500 py-2 text-center font-gilda text-sm leading-6 text-white md:text-lg rounded-md">
          {name}
        </span>
      </div>
    </Link>
  );
}
