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
            <div className="shadow-xl w-full md:w-[400px] h-[460px] md:h-auto flex flex-col justify-start md:justify-between items-center">
                    <div className="relative h-[151px] w-[150px] md:h-[275px] md:w-[300px] bg-white">
                        <Image
                          loading='lazy'
                          className="object-cover p-1"
                          src={image}
                          alt={subTitle}
                          layout="fill"
                        />
                    </div>
                    <div className='p-2 font-gilda text-[24px] fonst-normal fonst-[400] leading-normal self-start'>
                        {subTitle}
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='w-full mt-4 px-3 md:px-0'>
                            <hr className='bg-black h-[2px] w-full'/>
                        </div>
                        <div className='flex px-2 md:px-6 flex-col justify-between gap-3 items-center'>
                            <div className=''>
                                <p className='text-[15px] md:text-[20px] font-barlow leading-[30px]'>
                                    {text}
                                </p>
                            </div>
                            <div className='w-[170px] md:w-[224px] self-end md:self-center p-2 md:p-6'>
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