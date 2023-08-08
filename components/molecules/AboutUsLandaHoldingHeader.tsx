import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHoldingHeader({ text, title }: { text: string, title: string, image: string }) {
    return (
        <div className='flex flex-row  md:flex-col'>
            <div
                className='relative md:h-[512px] md:w-screen text-white md:mb-[177px] w-[430px] h-[118px]'
                style={{
                    backgroundImage: `url('/static/images/aerial-view-business-team.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className='absolute md:top-[180px] md:left-[121px] mt-24 pl-8 '>
                    <p className='font-barlow not-italic font-normal leading-6 tracking  text-white 	'>{title}</p>
                    <p className='md:text-4xl font-gilda not-italic font-normal line-height text-white mt-2 text-2xl'>{text}</p>
                </div>
            </div>
        </div>
    );
}

