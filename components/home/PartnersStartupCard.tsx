import Image from 'next/image';

export default function PartnersStartupCard({
  logo,
  title,
  description
}: {
  logo: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-[220px] w-[375px] select-none items-start gap-4 overflow-x-auto rounded-md bg-whiteGold p-5">
      <Image
        className="object-contain"
        src={`/static/images/Home/contact/${logo}.png`}
        alt="r"
        width={110}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <span className="font-gilda text-lg">{title}</span>
        <p className="font-barlow leading-4 ltr:tracking-[1.3px]">
          {description}
        </p>
      </div>
    </div>
  );
}
