import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';

export default function ContactUs() {
  // TODO: use daisyUI for styling
  return (
    <div className="h-[644px] relative bg-neutral-50">
      {/* TODO: show images with javascript map */}
      <div className="absolute flex-col right-20 top-10">
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/azad.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/uni.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/amirkabir.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/sharif.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="absolute flex-col right-56 top-10">
        <div className="spin-image-top">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/azad.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image-top">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/uni.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image-top">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/amirkabir.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image-top">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/sharif.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="absolute flex-col right-96 top-10">
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/azad.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/uni.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/amirkabir.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
        <div className="spin-image">
          <Image
            className="grayscale"
            src="/static/images/Home/universities/sharif.png"
            alt="t"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="w-[415px] h-[476px] left-[163px] top-[80px] absolute border">
        <input
          placeholder="Name"
          className="w-[333px] h-[45px] pl-3.5 pr-[236px] pt-3 pb-[11px] left-[41px] top-[79px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex"
        ></input>
        <input
          placeholder="Email"
          className="w-[333px] h-[47px] pl-3.5 pr-[236px] pt-3 pb-[13px] left-[41px] top-[153px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex"
        ></input>
        <input
          placeholder="Message"
          className="w-[333px] h-[110px] pl-3.5 pr-[251px] pt-3 pb-[76px] left-[41px] top-[229px] absolute bg-neutral-50 rounded-lg shadow border border-neutral-50 justify-start items-center inline-flex"
        ></input>
        <div className="w-[180px] h-[50px] left-[116px] top-[395px] absolute">
          <Button text="Send Message" size="send" />
        </div>
        <div className="h-[51px] left-[77px] top-0 absolute text-center text-neutral-800 text-[32px] font-medium tracking-[11.20px] font-condensed">
          CONTACT US
        </div>
      </div>
    </div>
  );
}