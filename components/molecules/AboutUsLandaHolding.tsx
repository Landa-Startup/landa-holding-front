import React from 'react'
import Image from 'next/image';
export default function AboutUsLandaHolding() {
  return (

    <div className='flex flex-col md:mb-20 m-10 md:flex-row justify-center items-center '>
      <div className='md:pr-[157px] md:pt-[80px] mb-5 md:pl-10 text-justify'>
        <p className=' shrink-0 my-3	text-black font-gilda text-3xl not-italic font-normal '>About Landa Holding</p>
        <p className=' text-justify  text-black font-barlow text-base not-italic font-normal leading-6 '>Landa International Holding started its activity<br /> in Canada in 2017 as one of the most reliable companies in<br />  the field of immigration.<br /> Landa Holding's distinctive feature that makes it unique<br />  compared to other immigration companies is its<br />  extensive charitable activities and high-quality<br />  transaction flow.<br />  Landa Holding aims to gather reliable investors together<br /> from all over the world and introduce the best<br />  investment opportunities for start-up businesses.</p>
      </div>
      <div className='md:pr-10'>
        {/* <img className='w-[360px] h-[157px]  md:w-[661px] md:h-[404px] mt-[13px]  pr-[33px] ' style={{
          backgroundImage: 'url(/static/images/0419a30cb9ec2a0cf247e25dd885f7c2.jpg)', backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}

        ></img> */}
        <Image
        className='  md:w-[600px] md:h-[404px] mt-[13px]  '
        src='/static/images/0419a30cb9ec2a0cf247e25dd885f7c2.jpg'
        width={600}
        height={404}
        alt='Image Alt Text'
        />

      </div>
    </div>)
}