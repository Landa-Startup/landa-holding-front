import React from 'react';
import Image from 'next/image';

export default function AboutUsProfileCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className='container bg-whiteGold w-fit h-fit mb-6 shadow-lg'>
      <Image
        alt='image'
        width={320}
        height={320}
        src={image}
      />

      <div className="flex justify-center items-center space-x-2 p-2 mt-6">
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
        <div className='ml-20'>
          <p className="text-gray-700 text-justify font-Barlow text-xs not-italic font-medium leading-normal mt-2 ml-9">
            {title}
          </p>
          <p className="text-gray-700 text-justify font-Barlow text-xs not-italic font-medium leading-normal mt-2 mb-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
