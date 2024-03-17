'use client'
import React from 'react';
import Image from 'next/image';
import { useLang } from 'stores/langStore';

type Props = {
  image: string;
  subTitle: string;
  text: string;
  goto: string;
  buttonText: string;
}

export default function UpcomingStartupsCard({ image, subTitle, text }: Props) {

  const { lang } = useLang.getState();

  console.log(lang);

  return (
    <>
      <div>
        <div className='border-1 flex h-full w-full flex-col justify-start border p-5 shadow-xl md:w-[400px] md:gap-8'>
          <div className='relative m-auto bg-white md:w-full'>
            <Image
              loading='lazy'
              className='m-auto h-[150px] w-auto pt-5'
              src={image}
              alt={subTitle}
              width={100}
              height={100}
            />
          </div>
          <div className='self-center p-2 font-gilda text-[24px] font-normal leading-normal'>
            {subTitle}
          </div>
          <div className='flex h-full flex-col gap-4'>
            <div className='w-full px-3 md:px-0'>
              <hr className='h-[2px] w-full bg-black' />
            </div>
            <div className='flex h-full flex-col items-center justify-between gap-3 px-2 text-justify md:px-6'>
              <div>
                <p className='font-barlow text-[15px] leading-[30px] md:text-[16px]'>
                  {text}
                </p>
              </div>
              {/* <div className='w-[170px] self-center p-2 md:w-[224px] md:p-6'>
                <ButtonRefactor
                  text={buttonText}
                  type='link'
                  href={goto}
                  bgColor='black'
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
