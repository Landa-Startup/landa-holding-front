import React from 'react';

type AboutUsCardProps = {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
  description: string;
}

const AboutUsCart = ({ title, text, image, reverse, description}: AboutUsCardProps) => {
  return (
    <>
      {reverse && (
        <div className='flex flex-col-reverse mt-32 text-justify md:grid md:grid-cols-2 md:mb-20'>
          <div className='font-barlow text-black md:text-lg	 leading-6 mt-[120px] items-center mx-8 not-italic md:-mt-28 md:w-[587px] md:h-[187px] '>
            <p className='text-black font-gilda text-2xl not-italic font-normal  items-center leading-6 text-start pr-[75px] md:mt-20 '>{title}</p>
            <p>{text}</p>
            {/* <button className=' md:text-center md:justify-center bg-[#AA8453] text-white mt-10	md:ml-40 w-[180px]  flex px-[61px] py-[14px] justify-center	gap-10 shrink-0 font-barlow  ml-16 mb-10'>Visit Now</button> */}
          </div>
          <div className='grid grid-cols-1 md:pl-20 -mt-28 '>
            {/* <img className="md:w-[589px] md:h-[357px] flex-shrink-0 -mb-[90px] w-[430px] h-[110px] md:mt-20 " style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} /> */}

          </div>
        </div>
      )}
      {!reverse && (
        <div className='flex flex-col md:grid md:grid-cols-2 md:mb-20'>
          <div className='grid grid-cols-1 md:mb-36'>
            {/* <img className="md:w-[589px] md:h-[357px] md:mt-48 w-[430px] h-[110px] flex-shrink: md:mr-[200px] -mb-20  " src={image} alt="Aboutuscart Image" style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} /> */}
          </div>
          <div className='font-barlow leading-6 mt-[120px]  not-italic text-black md:text-lg	px-[30px]'>
            <p className='mb-2 text-2xl not-italic font-normal leading-6 text-black md:mt-20 font-gilda text-start'>{title}</p>
            <p >{text}</p>
            <button className='md:text-center md:ml-48 md:justify-center	md:items-center	md:gap-2.5 	bg-[#AA8453]  text-white mt-10	 w-[180px]  flex px-[61px] py-[14px] justify-center	gap-10 shrink-0  font-barlow -mb-20 ml-8 '>Visit Now</button>
          </div>
          <p className="text-black font-Gilda Display text-sm	 not-italic	font-normal	leading-normal  ml-[110px]	 ">
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default AboutUsCart;
