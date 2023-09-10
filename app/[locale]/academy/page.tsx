import ContactUs from '@/components/academy/ContactUs';
import Gallery from '@/components/academy/Gallery';
import Scroll from '@/components/academy/ScrollMenu';
import Hero from '@/components/templates/Hero';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'آکادمی لاندا',
  description: '',
};

export default function page() {
  return (
    <div className="bg-[#F1F8EC]">
      <Hero
        showLanda={false}
        titles="SEO COURSE"
        subTitle="
Elevate your online impact with our SEO course at Landa Academy! Master search engine optimization, from keywords to cutting-edge strategies. Join us now and amplify your digital presence!"
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage="academy.png"
      />
      <div className="flex md:w-[702px] flex-col justify-start items-center gap-3.5 mt-5  mx-8 md:mx-auto">
        <div className="md:w-80 text-center text-yellow-400 text-2xl md:text-3xl font-normal uppercase leading-loose tracking-widest">
          Landa Academy
        </div>
        <div className="text-center text-black text-4xl md:text-6xl font-normal">
          “We believe in you”
        </div>
        <div className="text-black text-base md:text-xl font-normal leading-5 md:leading-loose tracking-wide text-justify">
          We are a group of young adults dedicated to assisting businesses and
          start-ups to introduce their products and services to the global
          market.
        </div>
      </div>
      <div className="flex justify-center md:justify-end my-7">
        <svg
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="915"
          height="301"
          viewBox="0 0 915 301"
          fill="none"
        >
          <path
            d="M721 -0.000104957L720.997 107.006M720.997 301L720.997 143.29M720.997 143.29L914.999 143.289M720.997 143.29L720.997 107.006M720.997 107.006L-8.00002 107.006"
            stroke="#3D5656"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-[360px] h-[145px] mx-8 md:ml-16 md:mr-20 relative">
          <Image
            layout="fill"
            objectFit="cover"
            alt="Academy"
            src="/static/images/Academy/852fb15316648e6e7e6205f9cea01f80.png"
          />
        </div>
      </div>

      <div className="md:w-[883px] gap-1 flex mx-8 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <circle cx="9.5" cy="9" r="9" fill="#FDD30A" />
        </svg>
        <div className="text-center text-black text-base md:text-xl font-normal leading-5 md:leading-10 tracking-wide">
          Embark on your adventurous journey at Landa Academy by participating
          in our tailored crash courses designed by mentors from the Landa
          Holding.
        </div>
      </div>
      <svg
        className="ml-auto hidden md:block my-5"
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="207"
        viewBox="0 0 720 207"
        fill="none"
      >
        <path
          d="M1.00588 0.0156249L1.00809 107.022M1.00428 207L1.00884 143.306L1.00809 107.022M1.00809 107.022L730.005 107.022"
          stroke="#3D5656"
          stroke-width="2"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <div className="hidden md:flex gap-1 my-7 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <circle cx="9.5" cy="9" r="9" fill="#FDD30A" />
          </svg>
          <p className="text-center text-black text-base md:text-xl font-normal leading-5 md:leading-10 tracking-wide">
            After completing each course, the top performers join the Landa
            Academy and gain access to our services, which include:
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-7 md:my-10 mx-8">
          <Image
            className="md:w-[553px] md:h-[298px]"
            width={553}
            height={298}
            alt="Academy"
            src="/static/images/Academy/81ac32a7db6541deac380f65556aaca0.png"
          />
          <div className="flex md:hidden gap-1 my-7 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <circle cx="9.5" cy="9" r="9" fill="#FDD30A" />
            </svg>
            <p className="text-center text-black text-base md:text-xl font-normal leading-5 md:leading-10 tracking-wide">
              After completing each course, the top performers join the Landa
              Academy and gain access to our services, which include:
            </p>
          </div>
          <div className="md:w-[559px] flex flex-col text-black text-xs md:text-xl font-medium leading-8 md:leading-10 tracking-wide justify-between md:ml-9">
            <span>1.Personalized mentoring by industry professionals</span>
            <span>2.Co-working spaces</span>
            <span>3.Free participation at the next courses</span>
            <span>
              4.Engagement in real projects and international startups
            </span>
            <span>5.Talent identification of adolescent</span>
            <span>6.Teaching Fundamentals of Entrepreneurship</span>
            <span>7.How to work in international markets</span>
          </div>
        </div>
      </div>
      <svg
        className="hidden md:block my-5"
        xmlns="http://www.w3.org/2000/svg"
        width="1044"
        height="172"
        viewBox="0 0 1044 172"
        fill="none"
      >
        <path
          d="M716.701 0.00672811L716.696 63.7017L716.697 99.9853M716.697 99.9853L0.00227398 99.985M716.697 99.9853L716.699 135.745M716.701 171.505L716.699 135.745M716.699 135.745L1043.59 135.745"
          stroke="#3D5656"
          stroke-width="2"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex my-5 mx-8 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="9" cy="9" r="9" fill="#FDD30A" />
        </svg>
        <p className="text-center md:w-[565px] text-black text-base md:text-xl font-normal leading-5 md:leading-10 tracking-wide">
          After completing the intensive 6-month academy program, you will have
          the opportunity to officially become a part of Landa Holding.
        </p>
      </div>
      <div className="flex justify-center md:justify-end mx-8 h-[145px]">
        <svg
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="488"
          height="231"
          viewBox="0 0 488 231"
          fill="none"
        >
          <path
            d="M298.999 0.00508838L299.001 42.7611M298.998 230.245L298.998 173M298.998 173L299.002 134.229L299.003 85.5172L299.001 42.7611M298.998 173L488 173M299.001 42.7611L0.500977 42.7613"
            stroke="#3D5656"
            stroke-width="2"
            strokeLinejoin="round"
          />
        </svg>
        <Image
          className="md:w-96 md:h-56 md:mr-28 md:ml-32"
          width={384}
          height={224}
          alt="Academy"
          src="/static/images/Academy/3a3225cf5a0508f377effbd0acb03f5c.jpg"
        />
      </div>
      <div className="md:w-[512px] gap-1 flex mx-8 my-5 md:my-28 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <circle cx="9.5" cy="9" r="9" fill="#FDD30A" />
        </svg>
        <div className="text-center text-black text-base md:text-xl font-normal leading-5 md:leading-10 tracking-wide">
          Following a year of active participation within Landa, you will
          receive a credible and verifiable Canadian work experience certificate
          from us.
        </div>
      </div>
      <Scroll />
      <Gallery />
      <ContactUs />
    </div>
  );
}
