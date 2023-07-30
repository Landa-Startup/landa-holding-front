import React from 'react';
const Aboutuscart: React.FC<AboutuscartProps> = ({ title, text, image, reverse, description }) => {
  return (
    <>
      {reverse && (
        <div className='grid grid-cols-2 mt-32 text-justify  }'>
          <div className='col-span-1 mt-32 ml-32 w-fit font-barlow'>
            <p className='text-black font-gilda text-2xl not-italic font-normal mb-3 text-center leading-6 mb-3'>{title}</p>
            <p className='text-black font-barlow text-xs not-italic font-normal leading-6'>{text}</p>
            <button className='primery mt-16	ml-72 '>Visit Now</button>
          </div>
          <div>
            <img className="w-[589px] h-[267px] flex-shrink-0 ml-16 mr-20 mt-20 mb-36" src={image} alt="Aboutuscart Image" />
          </div>
        </div>
      )}
      {!reverse && (
        <div className='grid grid-cols-2 '>
          <div>
            <img className="w-[589px] h-[357px] flex-shrink: 0 ml-16	mt-20	mr-20 " src={image} alt="Aboutuscart Image" />
          </div>
          <div className='mt-32'>
            <p className='text-black font-gilda text-2xl not-italic	font-normal	leading-6		 text-center mb-4 '>{title}</p>
            <p className='text-black font-barlow text-xs not-italic	font-normal	leading-6	ml-20 mr-28 '>{text}</p>
            <button className='primery mt-20  ml-80 mb-10 mr-60 '>Visit Now</button>
          </div>
          <p className="text-black font-Gilda Display text-sm	 not-italic	font-normal	leading-normal  ml-[110px]	 ">
            {description}
          </p>
        </div>
      )}


    </>

  );
};

export default Aboutuscart;
