import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';

export default function ContactUs() {
  // TODO: use daisyUI for styling
  return (
    <div className="md:h-[644px] bg-neutral-50 flex flex-col md:flex-row justify-between items-center md:px-36">
      {/* TODO: show images with javascript map */}
      <div className="md:w-[515px] md:h-[476px] flex flex-col items-center justify-center px-12 py-10">
        <p className="text-justify">
          At Immigration.ca we welcome strategic affiliations with international
          firms and qualified influencers alike. As an approved affiliate you
          will receive co-branded support and future representations from
          Canada’s leading immigration law firm and international recruitment
          enterprise. To become an affiliate, please complete our free
          questionnaire for our confidential review.
        </p>
        <Button text="Visit Now" size="دخفؤisit" />
      </div>
      <div className="flex gap-20 md:h-full relative mt-5 md:my-0 md:mb-0">
        <div className="absolute top-0 w-full h-16 md:h-48 bg-gradient-to-b from-white via-transparent-white z-10" />
        <div className="absolute bottom-0 w-full h-16 md:h-60 bg-gradient-to-t from-white via-transparent-white z-10" />
        <div className="flex flex-col justify-around">
          <div className="spin-image">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/1.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/22.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/3.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/4.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="spin-image-top">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/5.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/6.jpg"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/7.jpg"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/8.jpg"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="spin-image">
            <Image
              className="grayscale"
              src="/static/images/Home/universities/9.png"
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
