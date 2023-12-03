'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

export default function Hero({
    showLanda,
    buttonBg,
    backgroundImage,
    leftImage,
    showButton,
}: {
    showLanda: boolean;
    buttonBg?: string;
    backgroundImage: string;
    leftImage: string;
    showButton?: boolean;
}) {
    return (
        <div
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPositionX: '65%',
            }}
            className="relative h-[calc(100vh)] overflow-hidden md:h-screen"
        >
            <div className="flex flex-col items-center justify-center space-y-5 py-36 md:h-screen">
                <div
                    className={` ${showLanda ? 'block' : 'hidden'
                        } text-center font-barlow text-2xl font-normal tracking-[7px] text-white md:text-4xl md:tracking-[12.6px]`}
                >
                    Landa Holding
                </div>
                <div className="text-center font-gilda text-4xl tracking-[6.4px] text-[#F8F5F0] md:text-6xl">
                    Investment Center
                </div>

                {showButton ? (
                    <Button
                        text="Register Now"
                        size="notVisit"
                        addedClass={buttonBg ? 'md:hidden' : 'block'}
                        goto="/StartupsForm"
                        bgColor="Primary"
                    />
                ) : (
                    <></>
                )}
                <Image
                    loading="lazy"
                    className="absolute -right-16 bottom-0 mr-0 h-[382px] h-[420px]  w-[365px] w-[385px] sm:h-[302px] sm:w-[305px] md:right-0 md:mr-0   md:h-[372px] md:w-[265px] xl:h-[560px] xl:w-[420px] "
                    src={`${leftImage}`}
                    alt="Landa"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
