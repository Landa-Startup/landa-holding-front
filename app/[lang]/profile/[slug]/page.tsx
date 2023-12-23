'use client';
import EnvelopeMediaIconNew from '@/components/icons/socialMediaIcons/EnvelopeMediaIconNew';
import InstagramIconNew from '@/components/icons/socialMediaIcons/InstagramIconNew';
import LinkedinIconNew from '@/components/icons/socialMediaIcons/LinkedinIconNew';
import WhatsappIconNew from '@/components/icons/socialMediaIcons/WhatsappIconNew';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

export default function Page() {
  // const pathname = usePathname();
  // const slug = pathname?.replace('profile/', '');

  // useEffect(() => {
  //   async function fetchTags() {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/profile/${slug}/?format=json`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchTags();
  // }, [slug]);

  return (
    <div className="h-screen py-24 md:px-40 flex justify-center">
      <section className="md:w-[60%] flex flex-col items-center justify-between">
        {/* top */}
        <div className="flex flex-col items-center">
          <div className="w-[5.5rem] h-[5.5rem] rounded-full border border-gray-600"></div>
          <p className="my-3 text-xl">Rasoul Moradi Mehr</p>
          <p className="text-gray-500">Entrepreneur and Business Adviser</p>
        </div>
        {/* top */}
        {/* middle */}
        <div className="w-full">
          <ul className="w-full">
            <li className="shadow-md flex mt-3 justify-between px-2 py-3">
              <div className="mr-0">
                <div className="w-10 h-10  bg-red-400"></div>
              </div>
              <div className="flex">
                <p className="m-auto text-lg">Personal Website</p>
              </div>
              <div className="w-10"></div>
            </li>
            <li className="shadow-md flex mt-3 justify-between px-2 py-3">
              <div className="mr-0">
                <div className="w-10 h-10  bg-red-400"></div>
              </div>
              <div className="flex">
                <p className="m-auto text-lg">Personal Website</p>
              </div>
              <div className="w-10"></div>
            </li>
            <li className="shadow-md flex mt-3 justify-between px-2 py-3">
              <div className="mr-0">
                <div className="w-10 h-10  bg-red-400"></div>
              </div>
              <div className="flex">
                <p className="m-auto text-lg">Personal Website</p>
              </div>
              <div className="w-10"></div>
            </li>
          </ul>
        </div>
        {/* middle */}
        {/* down */}
        <div>
          <div className="mt-2 flex h-[22px] w-[200px] flex-row items-center justify-between">
            <Link
              aria-label="Instagram"
              href={
                'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='
              }
              className="hover:text-primary"
              target="_blank"
            >
              <InstagramIconNew className="bi bi-instagram h-8 w-8" />
            </Link>
            <Link
              aria-label="Email"
              href={'mailto:info@landaholding.com'}
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
              href={'https://wa.me/989120539563'}
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
              href={'https://www.linkedin.com/company/landa-startup-inc'}
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
