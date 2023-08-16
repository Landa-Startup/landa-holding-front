import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';

export default function ContactUs() {
  // TODO: use daisyUI for styling
  return (
    <div className="md:h-[644px] bg-neutral-50 flex flex-col md:flex-row justify-between items-center md:px-36">
      {/* TODO: show images with javascript map */}
      <div className="md:w-[515px] md:h-[476px] flex flex-col items-center justify-center px-12 py-10">
        <p className='text-justify'>
          At Immigration.ca we welcome strategic affiliations with international firms and qualified influencers alike. As an approved affiliate you will receive co-branded support and future representations from Canada’s leading immigration law firm and international recruitment enterprise. To become an affiliate, please complete our free questionnaire for our confidential review.
        </p>
        <Button text="Visit Now" size="visit" />
      </div>
      <div className="flex gap-20 md:h-full relative my-12 md:my-0 mb-28 md:mb-0">
        <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-white via-transparent-white z-10" />
        <div className="absolute -bottom-28 md:bottom-0 w-full h-60 bg-gradient-to-t from-white via-transparent-white z-10" />
        <div className=" flex-col space-y-5">
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
        <div className=" flex-col space-y-5">
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
        <div className=" flex-col space-y-5">
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
      </div>
    </div>
  );
}
