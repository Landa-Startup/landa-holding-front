import React from 'react';
import Button from '../../components/common/Button';
import AccelerationServices from '../../components/acceleration/AccelerationServices';
import Hero from '../../components/home/Hero';
import { Metadata } from 'next';
import Image from 'next/image';
import AccelerationCard from '../../components/acceleration/AccelerationCard';
import { acceleratorProcessItems } from '../../app/[lang]/statics';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Acceleration',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};
export default function page({ params: { lng }} : { params: { lng: string }} ) {
  return (
    <div>
      <Hero
        showLanda
        titles="Acceleration"
        backgroundImage="../public/static/images/acceleration/banner.png"
        leftImage="Landa.svg"
        showButton={true}
      />
      <div className="relative md:w-[490px] h-[284px] md:hidden mt-6 sm:block hidden ">
        <Image
          className="object-cover"
          src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
          alt="acceleration"
          layout="fill"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col font-gilda md:px-28 py-6 md:py-16 items-center text-left">
        <span className="text-[#55422A] ml-7 md:ml-0 text-3xl md:text-5xl leading-tight self-start">
          LANDA ACCELERATOR :
        </span>
        <span className="text-[#AA8453] ml-7 md:ml-0 text-xl md:text-4xl leading-tight self-start">
          Growth and Transformation into a Leading Startup
        </span>
        <div className="flex flex-col md:flex-row gap-12 mt-6">
          <div className="relative md:w-[490px] h-[284px] hidden md:block xl:ml-4 lg:ml-6">
            <Image
              className=" object-cover"
              src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
              alt="acceleration"
              layout="fill"
              loading="lazy"
            />
          </div>
          <p className="w-[340px] lg:w-[680px] lg:pr-2 md:h-[248px] md:w-[550px] text-justify font-barlow text-base leading-6 tracking-[1.6px]">
            Our accelerator division, as a leader in the field of startup
            acceleration and development on a global scale, assists individuals
            with innovative ideas and startup potentials at all stages, from
            launch and growth to success. Landa Accelerator aims to support the
            rapid development and expansion of startups and talented students
            looking to turn their ideas into high-performing businesses. We are
            in search of enthusiastic individuals and teams with the necessary
            skills and creativity to tackle challenges along the way as we
            accompany them on their journey and these young and well trained
            experts will be the one we invest in. There is a long way between
            the start of a business and success, and this is what our company is
            able to accelerate, which is the main aim in Landa Acceleration
            Center.
          </p>
        </div>

        <AccelerationCard
          addedClass='md:h-[756px] mt-6 md:mt-16 pb-3'
          title='FORUGH ACCELERATOR :'
          slogan='Igniting Ideas and Startups'
          imageClass='absolute right-7 top-11 w-[52px] h-[44px]'
          imageSrc='/static/images/acceleration/Rectangle 2978.png'
          textUp='In the Landa Accelerator division, innovative ideas and startups are carefully examined and evaluated. After confirming the value of an idea, we provide investment and connect startups with international networks to guide them through the development and expansion process. Our goal is to help startups progress more quickly and establish a strong presence in global markets.'
          textDown='Startups collaborating with us receive support from their early stages to their transformation into large companies. We provide you with opportunities to grow, achieve remarkable accomplishments, and enter global markets.'
          secondImageSrc='/static/images/acceleration/87ac8df38c4ff428ee903bb8595ad970.png'
          itemsList={acceleratorProcessItems}
        />

        <AccelerationCard
          addedClass='md:h-[756px] mt-6 md:mt-16 pb-3'
          title='FARAZAMAN ACCELERATOR :'
          slogan='Supporting the Youth'
          imageClass='absolute right-1 top-8 w-[46px] h-[46px]'
          imageSrc='/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png'
          textUp='As part of the higher education community, we, under the name of Farazman, are committed to supporting and nurturing students and youth in university-affiliated incubators and accelerators. We believe that the future of careers lies in the hands of young individuals, and we enable them to benefit from our resources and experiences. By offering financial resources, technical infrastructure, and access to global networks, we help students and youth turn their ideas into reality and acquire the skills needed for today&#39;s business world.'
          textDown='Additionally, we emphasize the importance of effective networking and skill enhancement for students and startups through education and mentorship. Our team consists of experienced mentors, both domestic and international, to provide necessary guidance and support to help you achieve the best results.'
          secondImageSrc='/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png'
        />

        <div className="flex flex-col">
          <span className="text-primary font-gilda text-3xl mt-12">
            Landa Accelerator Services
          </span>
          <AccelerationServices />
        </div>
        <div className="flex text-center md:text-left font-barlow text-xl leading-9 tracking-[2px] md:mx-10 my-11 gap-2 text-[#55422A]">
          <svg
            className="hidden md:block mt-3"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              id="Ellipse 169"
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#AA8453"
            />
          </svg>
          If you have an innovative startup idea or are a student looking for
          acceleration opportunities, we are waiting for your applications.
        </div>
        <Button
          goto="/StartupsForm"
          size="visit"
          text="Register Now"
          bgColor="Primary"
        />
      </div>
    </div>
  );
}
