
import Link from 'next/link';
// import IconLinkedin from '../icons/IconLinkedin';
import IconRoundedEmail from '../icons/IconRoundedEmail';
import IconRoundedInstagram from '../icons/IconInstagramRounded';
import IconWeb from '../icons/IconWeb';
import Image from 'next/image';

export default function AboutusPersonalTabs({
  image,
  name,
  position,
  linkedIn,
  email,
  website,
  instagram
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
  email: string;
  website: string;
  instagram: string;
}) {
  return (
    <div className="relative flex h-[450px] w-[350px] flex-col rounded-sm md:w-[400px]">
      <Image
        className="object-cover"
        src={image}
        alt="Landa Directors"
        layout="fill"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
      <div className="z-10 my-2 ml-2 flex flex-col gap-2 rtl:mr-2">
        <div>
          <Link href={linkedIn} target="_blank">
            <span className='text-white bg-black opacity-70 px-[8px] pb-[4px] text-3xl font-bold rounded-full'>in</span>
          </Link>
        </div>

        <div>
          <a href={email}>
            <IconRoundedEmail />
          </a>
        </div>
        <div>
          <Link href={website} target="_blank">
            <IconWeb />
          </Link>
        </div>
        <div>
          <Link href={instagram} target="_blank">
            <IconRoundedInstagram />
          </Link>
        </div>
      </div>
      <div className="absolute -bottom-[4.4rem] mt-64 flex w-full flex-col items-center bg-[#F8F5F0] py-7  ">
        <span className="font-gilda text-3xl font-normal text-black">
          {name}
        </span>
        <div className="flex w-full items-center justify-center font-light  ">
          <span className="border-t-3 font-barlow text-xl font-light text-[#AA8453]">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
}
