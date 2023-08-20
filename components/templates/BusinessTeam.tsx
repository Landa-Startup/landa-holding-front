import Image from 'next/image';
import React from 'react';

export default function AerialViewBusinessTeam() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Cooperation-members/Office.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[353px] md:h-[598px] business-team"
    >
      <div className="py-5 text-center font-condensed tracking-[3.75px] md:tracking-[7px]">
        <span className="text-white text-base md:text-xl font-normal">
          Landa Holding
          <br />
        </span>
        <span className="text-white text-base md:text-[40px] font-normal">
          What Our Cooperation Members Say?
        </span>
      </div>
      <div className="md:w-[1000px] mx-auto p-5 flex flex-col items-center bg-neutral-500 bg-opacity-60 w-96 md:h-[360px]">
        <div className="flex md:flex-col md:items-center w-96 md:w-full">
          {' '}
          <div className="relative md:ml-20 md:self-start md:flex-row justify-start items-center gap-[13px] flex flex-col w-1/3">
            {/* TODO: image should go to this address: /static/images/home/business-team/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg */}
            <Image
              className="w-14 h-14 md:w-[108px] md:h-[104px] border"
              src="/static/images/Home/Cooperation-members/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg"
              width={500}
              height={500}
              alt="Avatar"
            />
            <div className="md:hidden w-[150px] h-0 left-[125px] top-[150px] absolute origin-top-left -rotate-90 bg-white border border-white"></div>
            <div className="hidden md:block w-[300px] h-0 left-0 top-[115px] absolute bg-white border border-white"></div>
            <div className="flex-col justify-center items-start gap-[3px] text-center">
              <div className=" text-white text-base md:text-xl font-medium font-barlow">
                Morteza Jafari
              </div>
              <div className=" text-white text-xs md:text-base font-normal font-barlow">
                Founder of IRimmigration
              </div>
              <div className=" text-white text-xs md:text-[15px] font-normal font-gilda mt-1">
                Investor
              </div>
              <div className="inline-flex gap-3 mt-2 md:hidden">
                <Image
                  className="w-4 h-4"
                  src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
                  alt="Linkedin"
                  width={50}
                  height={50}
                />
                <Image
                  className="w-4 h-4"
                  src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
                  alt="Linkedin"
                  width={50}
                  height={50}
                />
                <Image
                  className="w-4 h-4"
                  src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
                  alt="Linkedin"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="p-2.5 pt-5 justify-center items-center gap-3 inline-flex w-2/3 md:w-full">
            <div className="text-stone-100 text-xs md:text-xl font-medium leading-[20px] md:leading-7 font-barlow md:w-[722px]">
              Landa Holding provides comprehensive information on investment
              strategies, business creation, and entrepreneurial methods. Its
              informative approaches in various economic and managerial fields
              assist {"Landa's"} followers in gaining a deeper understanding of
              concepts and principles related to investment and
              entrepreneurship.
            </div>
            <div className="flex-col hidden gap-3 mt-2 md:flex ml-5">
              <Image
                className="w-7 h-w-7"
                src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
                alt="Linkedin"
                width={50}
                height={50}
              />
              <Image
                className="w-7 h-w-7"
                src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
                alt="Linkedin"
                width={50}
                height={50}
              />
              <Image
                className="w-7 h-w-7"
                src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[12px] md:gap-[19px] inline-flex mt-5">
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-primary rounded-full" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
          <button className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white" />
        </div>
        <div className="w-[283.01px] h-[0px]border border-white"></div>
      </div>
    </div>
  );
}
