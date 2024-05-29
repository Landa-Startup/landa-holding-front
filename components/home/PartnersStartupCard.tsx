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
    <div className="flex flex-col h-[300px] w-[275px] select-none items-center gap-4 overflow-x-auto rounded-md bg-whiteGold p-5 shadow-lg">
      <Image
        className="object-contain"
        src={`/static/images/Home/contact/${logo}.png`}
        alt="r"
        width={60}
        height={60}
      />
      <div className="flex flex-col gap-2">
        <span className="font-gilda text-md">{title}</span>
        <p className="font-barlow leading-4 text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
