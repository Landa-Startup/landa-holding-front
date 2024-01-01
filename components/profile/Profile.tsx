'use client';
import React from 'react';
import EnvelopeMediaIconNew from '@/components/icons/socialMediaIcons/EnvelopeMediaIconNew';
import InstagramIconNew from '@/components/icons/socialMediaIcons/InstagramIconNew';
import LinkedinIconNew from '@/components/icons/socialMediaIcons/LinkedinIconNew';
import WhatsappIconNew from '@/components/icons/socialMediaIcons/WhatsappIconNew';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProfileData{
    first_name:string;
    last_name:string;
    websites:string[];
    job_title:string;
    instagram:string;
    email:string;
    linkedin:string;
    whatsapp:string;
    thumbnail:string;
}




export default function Profile() {
    const ProfileDataObject:ProfileData = {
        first_name:'',
        last_name:'',
        websites:[],
        job_title:'',
        instagram:'',
        email:'',
        linkedin:'',
        whatsapp:'',
        thumbnail:'',
    }


  const pathname = usePathname();
  const slug = pathname?.replace('/en/profile/', '');

  const [data, setData] = useState<ProfileData>(ProfileDataObject);
  useEffect(() => {
    async function fetchTags() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}user/profile/${slug}?format=json`
      );
      // console.log(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}user/profile/${slug}?format=json`)
      setData(await response.json());
    }
    fetchTags();
  }, [slug]);

  return (
    <div className="flex h-screen justify-center py-24 md:px-40">
      <section className="flex flex-col items-center justify-between md:w-[60%]">
        {/* top */}
        <div className="flex flex-col items-center">
          <div className="h-[5.5rem] w-[5.5rem] rounded-full border border-gray-600"><Image src={data.thumbnail} className='h-[5.5rem] w-[5.5rem] rounded-full' width={100} height={100} alt='thumbnail'/></div>
          <p className="my-3 text-xl">
            {data?.first_name} {data?.last_name}
          </p>
          <p className="text-gray-500">{data?.job_title}</p>
        </div>
        {/* top */}
        {/* middle */}
        <div className="w-full">
          <ul className="w-full">
            {data?.websites.map((website:any,index:number) => {
                return(
                <Link key={index} href={"https://landaholding.com"} className="hover:text-primary" target="_blank">
                    <li className="mt-3 flex justify-between px-2 py-3 shadow-md">
                        <div className="mr-0">
                        <div className="h-10 w-10  bg-red-400"><Image src={website.logo} width={100} height={100} alt='logo'/></div>
                        </div>
                        <div className="flex">
                        <p className="m-auto text-lg">{website.title}</p>
                        </div>
                        <div className="w-10"></div>
                    </li>
                    </Link>
                )
            })}
          </ul>
        </div>
        {/* middle */}
        {/* down */}
        <div>
            {/* TODO: change default address */}
          <div className="mt-2 flex h-[22px] w-[200px] flex-row items-center justify-between">
            <Link
              aria-label="Instagram"
              href={data?.instagram||"https://landaholding.com"}
              className="hover:text-primary"
              target="_blank"
            >
              <InstagramIconNew className="bi bi-instagram h-8 w-8" />
            </Link>
            <Link
              aria-label="Email"
              href={`mailto:${data?.email}`}
              className="hover:text-primary"
              target="_blank"
            >
              <EnvelopeMediaIconNew
                className="bi bi-envelope h-8 w-8"
                width="16"
                height="16"
              />
            </Link>
            <Link
              aria-label="Whatsapp"
              href={data?.whatsapp||"https://landaholding.com"}
              className="hover:text-primary"
              target="_blank"
            >
              <WhatsappIconNew
                width="16"
                height="16"
                className="bi bi-whatsapp h-8 w-8"
              />
            </Link>
            <Link
              aria-label="Linkedin"
              href={data?.linkedin||"https://landaholding.com"}
              className="hover:text-primary"
              target="_blank"
            >
              <LinkedinIconNew
                width="16"
                height="16"
                className="bi bi-linkedin h-8 w-8"
              />
            </Link>
          </div>
        </div>
        {/* down */}
      </section>
    </div>
  );
}
