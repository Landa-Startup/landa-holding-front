import Image from 'next/image';


export default function LandaHoldingPriorityCard({
  title,
  image
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative flex h-24  w-44 justify-center overflow-hidden border border-primary md:h-40 md:w-80">
      {/* Background Image */}
      <Image
        loading="lazy"
        className="absolute -bottom-2 -right-2 h-12 w-12 opacity-5 md:-bottom-8 md:-right-6 md:h-[120px] md:w-[120px]"
        src={image}
        alt=""
        width={500}
        height={500}
      />

      {/* Title Container */}
      <div className="inline-flex items-center justify-center gap-2.5">
        <div className="flex w-10 items-center justify-center text-center font-gilda text-base font-normal text-gray-600 md:w-52 md:text-2xl">
          {title}
        </div>
      </div>

      {/* Small Image Overlay */}
      <Image
        loading="lazy"
        className="absolute left-2 top-2 h-8 w-8 md:h-[50px] md:w-[50px]"
        src={image}
        alt="Landa Priority"
        width={500}
        height={500}
      />
    </div>
  );
}
