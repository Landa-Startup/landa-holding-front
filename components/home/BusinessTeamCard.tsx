import Image from 'next/image';
import Link from 'next/link';


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
    <div className="flex md:w-full md:flex-col md:items-center">
      <div className="relative flex w-1/3 flex-col items-center justify-start gap-3 md:ml-10 md:flex-row md:self-start">
        <Image
          loading="lazy"
          className="h-14 w-14 border md:h-[104px] md:w-[108px]"
          src={`/static/images/Home/Cooperation-members/${profileImage}`}
          width={500}
          height={500}
          alt="Avatar"
        />
        <div className="absolute left-[115px] top-[210px] h-0 w-[200px] origin-top-left -rotate-90 border border-white bg-white md:top-[170px] md:hidden md:w-[170px]"></div>
        <div className="absolute left-0 top-[120px] hidden h-[1px] w-[285px] border border-white bg-white rtl:right-0 md:block"></div>
        <div className="flex flex-col items-center justify-center gap-[3px] text-center md:items-start ">
          <div className=" inline-flex font-barlow text-base font-medium text-white md:w-48 md:text-xl">
            {name}
          </div>
          <div className="font-barlow text-xs font-normal text-white md:text-base ">
            {roleInCompany}
          </div>
          <div className=" mt-1 font-gilda text-xs font-normal text-white md:text-[15px]">
            {role}
          </div>
          <div className="mt-2 inline-flex gap-3 md:hidden">
            <Link href={linkedinLink} target="_blank">
              <Image
                loading="lazy"
                className="h-4 w-4"
                src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </Link>
            <Link href={personalWebsite} target="_blank">
              <Image
                loading="lazy"
                className="h-4 w-4"
                src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
                alt="Website"
                width={50}
                height={50}
              />
            </Link>
            <Link href={`mailto:${email}`}>
              <Image
                loading="lazy"
                className="h-4 w-4"
                src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
                alt="Email"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-3 inline-flex w-2/3 items-center justify-center gap-3 p-2.5 pt-4 md:w-full md:ps-12">
        <div className="font-barlow text-xs font-medium leading-[20px] tracking-wider text-stone-100 md:mt-3 md:w-[700px] md:text-xl md:leading-[28px]">
          {commentDescription}
        </div>
        <div className="ml-5 mt-2 hidden flex-col gap-3 md:flex">
          <Link href={linkedinLink} target="_blank">
            <Image
              loading="lazy"
              className="h-w-7 w-7"
              src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
              alt="Linkedin"
              width={50}
              height={50}
            />
          </Link>
          <Link href={personalWebsite} target="_blank">
            <Image
              loading="lazy"
              className="h-w-7 w-7"
              src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
              alt="Website"
              width={50}
              height={50}
            />
          </Link>
          <Link href={`mailto:${email}`}>
            <Image
              loading="lazy"
              className="h-w-7 w-7"
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
