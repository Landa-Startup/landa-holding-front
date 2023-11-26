import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BusinessTeamCard({
  name,
  roleInCompany,
  role,
  profileImage,
  commentDescription,
  linkedinLink,
  personalWebsite,
  email,
}: {
  name: string;
  roleInCompany: string;
  role: string;
  profileImage: string;
  commentDescription: string;
  linkedinLink: string;
  personalWebsite: string;
  email: string;
}) {
  return (
    <div className="flex md:flex-col md:items-center md:w-full">
      <div className="relative md:ml-10 md:self-start md:flex-row justify-start items-center gap-3 flex flex-col w-1/3">
        <Image
          loading="lazy"
          className="w-14 h-14 md:w-[108px] md:h-[104px] border"
          src={`/static/images/Home/Cooperation-members/${profileImage}`}
          width={500}
          height={500}
          alt="Avatar"
        />
        <div className="md:hidden w-[200px] md:w-[170px] h-0 left-[115px] top-[210px] md:top-[170px] absolute origin-top-left -rotate-90 bg-white border border-white"></div>
        <div className="hidden md:block w-[285px] h-[1px] left-0 top-[120px] absolute bg-white border border-white"></div>
        <div className="flex flex-col justify-center md:items-start gap-[3px] text-center items-center ">
          <div className=" text-white text-base md:text-xl font-medium font-barlow inline-flex md:w-48">
            {name}
          </div>
          <div className="text-white text-xs md:text-base font-normal font-barlow ">
            {roleInCompany}
          </div>
          <div className=" text-white text-xs md:text-[15px] font-normal font-gilda mt-1">
            {role}
          </div>
          <div className="inline-flex gap-3 mt-2 md:hidden">
            <Link href={linkedinLink} target="_blank">
              <Image
                loading="lazy"
                className="w-4 h-4"
                src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </Link>
            <Link href={personalWebsite} target="_blank">
              <Image
                loading="lazy"
                className="w-4 h-4"
                src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
                alt="Website"
                width={50}
                height={50}
              />
            </Link>
            <Link href={`mailto:${email}`}>
              <Image
                loading="lazy"
                className="w-4 h-4"
                src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
                alt="Email"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2.5 pt-4 md:ps-12 ml-3 justify-center items-center gap-3 inline-flex w-2/3 md:w-full">
        <div className="text-stone-100 text-xs md:text-xl font-medium leading-[20px] md:leading-[28px] tracking-wider font-barlow md:w-[700px] md:mt-3">
          {commentDescription}
        </div>
        <div className="flex-col hidden gap-3 mt-2 md:flex ml-5">
          <Link href={linkedinLink} target="_blank">
            <Image
              loading="lazy"
              className="w-7 h-w-7"
              src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
              alt="Linkedin"
              width={50}
              height={50}
            />
          </Link>
          <Link href={personalWebsite} target="_blank">
            <Image
              loading="lazy"
              className="w-7 h-w-7"
              src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
              alt="Website"
              width={50}
              height={50}
            />
          </Link>
          <Link href={`mailto:${email}`}>
            <Image
              loading="lazy"
              className="w-7 h-w-7"
              src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
              alt="Linkedin"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
