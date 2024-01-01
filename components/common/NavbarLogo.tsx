import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from 'stores/langStore'


export default function NavbarLogo () {

  const { lang } = useLang.getState();  

  return (
    <div className="m-2 flex h-full items-center justify-start px-2 text-left absolute top-6 left-10 rtl:right-10 z-20">
        <Link href="/">
          <div className="flex flex-col items-center md:items-end md:flex-row">
            <Image
              className="h-10 w-10 md:h-14 md:w-12"
              src="static/images/Logo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="font-condensed text-[12px] font-bold ltr:tracking-[0.25rem] text-primary md:text-xl">
              {lang == 'en' ? 'LANDA' : 'لاندا'}
            </span>
          </div>
        </Link>
    </div>
  )
}