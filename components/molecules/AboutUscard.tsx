import Image from 'next/image';
import React from 'react';

type AboutUsCardProps = {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
  description: string;
}

const AboutUscard = ({ title, text, image, reverse, description}: AboutUsCardProps) => {
  return (
    <>
      {reverse && (
        <div className='flex flex-col-reverse py-12 leading-6 justify-items-center md:grid md:grid-cols-2  '>
          <div className='px-[30px] md:px-0 leading-6 text-black md:ml-8 '>
            <p className='font-gilda text-3xl md:pr-8 text-center mt-3'>{title}</p>
            <p className='font-barlow  text-normal leading-6 justify-left mt-5 '>{text}</p>
            <button className=' justify-items-center mx-auto bg-[#AA8453] text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow'>Visit Now</button>
          </div>
          <div className='col-span-1 md:pl-16'>
            {/* <img className="mb-2 md:w-[650px] md:h-[320px] w-[430px] h-[110px] md:mt-2 "
             style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} /> */}
            <Image 
            alt={`Image for ${title}`}
            src={image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className='mb-2 md:w-[650px] md:h-[320px] w-[430px] h-[110px] md:mt-2'
            />
          </div>
        </div>
      )}
      {!reverse && (
        <div className='flex md:py-12 flex-col md:grid md:grid-cols-2'>
          <div className='col-span-1'>
          {/* <img className="mb-2 md:w-[589px] md:h-[357px] w-[430px] h-[150px] md:mt-2 " style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} /> */}
            <Image 
            alt={`Image for ${title}`}
            src={image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className='mb-2 md:w-[589px] md:h-[357px] w-[430px] h-[150px] md:mt-2'
            />
          </div>
          <div className='col-span-1 font-barlow leading-6 mt-1 text-black	px-[30px]'>
            <p className='text-3xl font-normal text-black mt-3 text-center font-gilda'>{title}</p>
            <p className='mt-5 text-normal' >{text}</p>
            <button className=' justify-items-center mx-auto bg-[#AA8453] text-white md:mt-28 mt-8  flex px-10 py-2 font-barlow'>Visit Now</button>
          </div>
          <p className="text-black font-Gilda Display text-sm	font-normal	leading-normal  ml-[110px]">
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default AboutUscard;