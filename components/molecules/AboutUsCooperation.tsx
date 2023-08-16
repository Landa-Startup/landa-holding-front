
import React from 'react';
import IconMore from '@/components/atoms/IconMore';
import Image from 'next/image';

function AboutUsCooperation() {
  return (
    <div className="text-center h-full bg-neutral-800 text-white py-10">
      <div className="text-center">
        <p className="tracking-widest">LANDA HOLDING</p>
        <p className="text-5xl not-italic leading-normal font-gilda">
          Cooperation
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-28">
        <div className="col-span-1">
          <p className="tracking-wide font-barlow font-semibold  text-xl">
            Investment Center
          </p>
          <p className="font-light md:px-20 pt-2">
            The Landa Investors Association is composed of a group of
            individuals active in the field of investment who collaborate with
            each other based on their investment priorities and invest in
            startups and new businesses.
            <br />
            If you are also interested in investing in new and innovative
            businesses and increasing your capital in the most modern way, we
            have provided an opportunity for you.
          </p>
          <div className="pt-10">
            <span className="mr-3">More</span>
            <a href="#">
            <Image width={40} height={40} className='inline' src="/static/images/About/right-arrow2.png" alt="arrow" />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <p className="tracking-wide font-barlow font-semibold  text-xl">
          Entrepreneur Center
          </p>
          <p className="font-light md:px-20 pt-2 pb-1">
          The Entrepreneur Center is a community of active individuals in the
            field of business and entrepreneurship who form a dynamic and
            powerful technological ecosystem together.
            <br />
            If you also have an interest in building a business or possess
            special skills, join us by completing the Entrepreneur Membership
            form.
          </p>
          <div className="md:pt-20 pt-12">
            <span className="mr-3">More</span>
            <a href="#">
            <Image width={40} height={40} className='inline' src="/static/images/About/right-arrow2.png" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCooperation;
// class="md:grid md:grid-cols-3 gap-4 md:mx-[119px] mb-52 flex flex-col justify-center items-center mx-10"