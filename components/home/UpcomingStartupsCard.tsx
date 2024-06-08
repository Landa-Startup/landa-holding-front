'use client'
import React from 'react';
import Image from 'next/image';
// import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

type Props = {
  image: string;
  subTitle: string;
  text: string;
  goto: string;
  buttonText: string;
}

export default function UpcomingStartupsCard({ image, subTitle, text, goto, buttonText }: Props) {

  // const { lang } = useLang.getState();

  // console.log(lang);

  return (
      <div className='w-full md:w-[30%] mb-16 md:mb-0'>
        <div className='flex h-full flex-col justify-start rounded-xl p-5 shadow-2xl md:gap-x-8'>
          <div className='relative m-auto bg-white md:w-full'>
            <Image
              loading='lazy'
              className='m-auto h-[170px] w-auto pt-5'
              src={image}
              alt={subTitle}
              width={100}
              height={100}
            />
          </div>
          <div className='self-center font-bold pt-8 font-gilda text-[20px] leading-normal'>
            {subTitle}
          </div>
          <div className='flex h-full flex-col gap-4 my-8'>
            {/* <div className='w-full px-3 md:px-0'>
              <hr className='h-[2px] w-full bg-black' />
            </div> */}
            <div className='flex h-full flex-col items-center justify-between gap-3 '>
              <div>
                <p className='font-barlow text-[15px] leading-[30px] md:text-[16px]'>
                  {text}
                </p>
              </div>
            <div className="mt-3 h-auto w-[224px] p-2">
                <ButtonRefactor
                  text={buttonText}
                  type="link"
                  href={goto}
                  bgColor="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
