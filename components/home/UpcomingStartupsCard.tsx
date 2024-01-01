import React from 'react'
import Image from 'next/image'
import ButtonRefactor from '../common/ButtonRefactor'
import { useLang } from 'stores/langStore'

type Props = {
    image: string;
    subTitle: string;
    text: string;
    goto: string;
    buttonText: string;
}

export default async function UpcomingStartupsCard({image, subTitle, text, goto, buttonText}: Props) {

    const { lang } = useLang.getState();

    console.log(lang);

  return (
    <>
        <div>
            <div className="border-1 flex h-[460px] w-full flex-col items-center justify-start border shadow-xl md:h-[660px] md:w-[400px] md:gap-8">
                    <div className="relative h-[151px] w-[150px] bg-white md:h-[275px] md:w-[300px]">
                        <Image
                          loading='lazy'
                          className="object-cover p-1"
                          src={image}
                          alt={subTitle}
                          layout="fill"
                        />
                    </div>
                    <div className='fonst-normal fonst-[400] self-start p-2 font-gilda text-[24px] leading-normal'>
                        {subTitle}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full px-3 md:px-0'>
                            <hr className='h-[2px] w-full bg-black'/>
                        </div>
                        <div className='flex flex-col items-center justify-between gap-3 px-2 md:px-6'>
                            <div className='max-h-[100px] overflow-auto'>
                                <p className='font-barlow text-[15px] leading-[30px] md:text-[20px]'>
                                    {text}
                                </p>
                            </div>
                            <div className='w-[170px] self-end p-2 md:w-[224px] md:self-center md:p-6'>
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
    </>
  )
}