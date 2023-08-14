import React from 'react'
export default function AboutUsLandaHolding() {
  return (

    <div className='flex flex-col mb-[124px] md:flex-row md:p-5 md:justify-center md:space-x-10 px-[33px] mt-[17px] mr-33px'>
      <div className='md:pr-[157px] md:pt-[80px] md:pl-10 text-justify'>
        {/* <p className=' shrink-0	text-black font-gilda text-3xl not-italic font-normal '>About Landa Holding</p>
        <p className=' text-justify  text-black font-barlow text-base not-italic font-normal leading-6 '>Landa International Holding started its activity<br /> in Canada in 2017 as one of the most reliable companies in<br />  the field of immigration.<br /> Landa Holding's distinctive feature that makes it unique<br />  compared to other immigration companies is its<br />  extensive charitable activities and high-quality<br />  transaction flow.<br />  Landa Holding aims to gather reliable investors together<br /> from all over the world and introduce the best<br />  investment opportunities for start-up businesses.</p> */}
      </div>
      <div>
        <img className='w-[360px] h-[157px]  md:w-[661px] md:h-[404px] mt-[13px]  pr-[33px] ' style={{
          backgroundImage: 'url(/static/images/0419a30cb9ec2a0cf247e25dd885f7c2.jpg)', backgroundSize: 'cover',
          backgroundPosition: 'center'
}}
       
          ></img>
      </div>
    </div>)
}