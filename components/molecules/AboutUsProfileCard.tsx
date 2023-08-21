import React from 'react';
import Image from 'next/image';

export default function AboutUsProfileCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className='container mb-6 shadow-lg bg-whiteGold w-fit h-fit'>
      <a href=''>      
        <Image
        alt='image'
        width={420}
        height={320}
        src={image}
      />
      </a>

      <div className="flex items-center justify-center p-2 mt-6 space-x-2">
        <Image
          alt='icon1'
          src="/static/images/03bc78eaab3dcbbdddec7554e9d34351.png"
          width={36}
          height={36}
        />
        <Image
          alt='icon2'
          src="/static/images/6fd49ad10f9b1a9ab4224d4d900d8355.png"
          width={36}
          height={36}
        />
        <Image
          alt='icon3'
          src="/static/images/aeb307f84efb8c124b331799a6f734e6.png"
          width={36}
          height={36}
        />
        <Image
          alt='icon4'
          src="/static/images/c897906edf05703723098f4a66032d9b.png"
          width={36}
          height={36}
        />
      </div>

      <div>
        <div className='text-center font-gilda'>
          <p className="mt-2 text-xl  font-medium text-black font-Barlow">
            {title}
          </p>
          <p className=" text-gray-700 font-Barlow text-xs font-normal mt-2 mb-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
