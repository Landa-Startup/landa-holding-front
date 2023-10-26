import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
export default function HomeOurTeam() {
  return (
    <div className="w-full  mb-16 bg-white flex-col justify-start items-center relative gap-9 inline-flex ">
      <div className="ml-5 xl:ml-40 lg:self-start flex flex-col items-center">
        <span className="text-black text-base font-normal tracking-[5.60px] font-condensed">
          Landa Holding
          <br />
        </span>
        <span className="text-5xl font-normal tracking-widest text-black font-condensed ">
          Our Team
        </span>
      </div>
      <div className='flex items-center justify-center'>
        <p className='md:container md:mx-auto md:px-16 text-center md:text-left'>Our team of experts is comprised of professionals who are passionate about their work, and have an extensive background in a wide variety of applications, and are willing to help at any time.</p>
        {/* <Link href={"/our-team"}>
                    <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow">
                        View More
                    </button>
                </Link> */}

      </div>

      <Image
        width={789}
        height={243}
        quality={100}
        alt="OurTeam"
        className="hidden md:block w-[444px] md:w-[1192px] h-[284px] md:h-[693px] object-cover object-scale-down"
        src="/static/images/Home/OurTeam/desktop.jpg"
      />
      <Image
        width={375}
        height={200}
        quality={100}
        alt="OurTeam"
        className="object-cover object-scale-down md:hidden"
        src="/static/images/Home/OurTeam/mobile.jpeg"
      />
      <Link href={"/our-team"}>
        <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-8 flex px-10 py-2 font-barlow">
          View More
        </button>
      </Link>{' '}
    </div>

  );
}