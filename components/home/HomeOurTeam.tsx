import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
export default function HomeOurTeam() {
  const items = [
    {
      image: '/static/images/our-team/Personals/a3.png',
      position: 'Secretary',
      name: 'Lida Parvizi',
      linkedIn: '',
      category: 'secretary'
    },
    {
      image: '/static/images/our-team/Personals/a6.png',
      position: 'CTO',
      name: 'Iman Nasr',
      linkedIn: '',
      category: 'mentor'
    },
    {
      image: '/static/images/our-team/Personals/a33.png',
      position: 'Public Relations Officer',
      name: 'Gelareh Bahrami',
      linkedIn: '',
      category: 'public relations officer'
    },
    {
      image: '/static/images/our-team/Personals/a7.png',
      position: 'Full stack',
      name: 'Sajjad Momeni',
      linkedIn: '',
      category: 'mentor'
    },
    {
      image: '/static/images/our-team/Personals/a5.png',
      position: 'Accountant',
      name: 'Ali Solaimani',
      linkedIn: '',
      category: 'accountant'
    },
    {
      image: '/static/images/our-team/Personals/a13.png',
      position: 'UX/UI Designer',
      name: 'Ariana Shafie',
      linkedIn: '',
      category: 'designer'
    },
    {
      image: '/static/images/our-team/Personals/a9.png',
      position: 'Digital Marketer',
      name: 'Ehsan Aliakbari',
      linkedIn: '',
      category: "digital marketer"
    },
    {
      image: '/static/images/our-team/Personals/a21.png',
      position: 'Graphic Designer',
      name: 'Hoda Mahdi',
      linkedIn: '',
      category: 'designer'
    },
  ];

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