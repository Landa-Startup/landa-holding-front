'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo({ route }: { route: 'holding' | 'academy' }) {
  return (
    <div className="px-2 m-2 text-left h-full flex justify-start items-center">
      <Link href={route === 'holding' ? '/' : '/academy'}>
        <div className="flex flex-col md:flex-row items-end">
          <Image
            className="w-10 h-10 md:w-12 md:h-14"
            src={
              route === 'holding'
                ? 'static/images/Logo.svg'
                : 'static/images/Academy.logo.svg'
            }
            alt="Logo"
            width={125}
            height={106}
          />
          <span className="text-lime-400 text-[12px] md:text-xl tracking-[0.375px] font-bold">
            Academy
          </span>
        </div>
      </Link>
    </div>
  );
}
