import React from 'react'
import PrimaryDot from '../icons/acceleration/PrimaryDot'
import Image from 'next/image'

type Props = {
    addedClass: string;
    title: string;
    slogan: string;
    imageClass: string;
    imageSrc: string;
    textUp: string;
    textDown: string;
    secondImageSrc: string;
    itemsList?: Array<string>;
}

export default function AccelerationCard({
    addedClass,
    title,
    slogan,
    imageClass,
    imageSrc,
    textUp,
    textDown,
    secondImageSrc,
    itemsList
}: Props) {
  return (
    <>
      <div className={`bg-[#F7F3EE] md:w-[1205px] relative px-2 md:px-8 lg:px-8 xl:px-8 ${addedClass}`}>
        <div className='flex items-center gap-2 mt-8 md:mt-[77px]'>
            <PrimaryDot />
            <div className='flex flex-col md:flex-row'>
                <span className='text-[#80633E] font-gilda text-xl md:text-3xl md:mx-2'>
                    {title}
                </span>
                <span className='text-[#AA8453] font-gilda text-base md:text-3xl'>
                    {slogan}
                </span>
            </div>
        </div>
        <Image
          className={imageClass} 
          src={imageSrc}
          alt='ACCELERATOR'
          width={71}
          height={60}
          loading='lazy'
        />
        <div className='flex flex-col font-barlow leading-[24px] tracking-[1.6px] text-[#000] mt-6 pb-3 md:ml-48 lg:ml-20 xl:ml-0'>
            <p>{textUp}</p>
            <p className='mt-5'>{textDown}</p>
        </div>
        {itemsList && 
          <span className='text-[#AA8453] font-gilda text-3xl mt-8'>
            Accelerator Process
          </span>
        }
        {itemsList && 
          <div className='grid grid-cols-2 font-barlow text-[#000] z-10 mt-6 gap-6 text-xs md:text-sm lg:text-sm xl:text-sm'>
            {itemsList?.map((item, index) => (
                <span className='text-normal lg:text-lg'>{item}</span>
            ))}
          </div>
        }
        <Image
          className='absolute bottom-0 right-0 opacity-20'
          src={secondImageSrc}
          alt='ACCELERATOR'
          width={521}
          height={4221}
          loading='lazy'
        />
      </div>
    </>
  )
}