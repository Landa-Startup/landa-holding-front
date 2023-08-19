import React from 'react'
import Image from 'next/image';
export default function AboutUsLandaHolding() {
  return (
    <div className='flex flex-col lg:justify-center md:gap-2 p-7 md:items-center justify-items-center md:m-12 lg:flex-row'>
      <div className='text-black xl:px-10 sm:pb-4 lg:text-justify '>
        <p className='pb-4 text-3xl text-center xl:text-4xl md:text-left text-semibold font-gilda'>About Landa Holding</p>
        <p className='ml-5 font-normal tracking-wide font-barlow md:ml-0'>Landa International Holding started its activity in Canada <br/>  in 2017 as one of the most reliable companies in the field<br/>of immigration.<br /> Landa Holding's distinctive feature that makes it unique<br />  compared to other immigration companies is its<br />  extensive charitable activities and high-quality<br />  transaction flow.<br />  Landa Holding aims to gather reliable investors together<br/> from all over the world and introduce the best<br/>investment opportunities for start-up businesses.</p>
      </div>
      <div className='pt-8 md:pt-2 md:pl-8 xl:p-5'>
      <Image
        className=''
        src='/static/images/0419a30cb9ec2a0cf247e25dd885f7c2.jpg'
        width={600}
        height={404}
        alt=''
      />
      </div>
    </div>
    )
}