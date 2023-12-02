import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Input from '@/components/common/form/Input';
import Calender from '@/components/icons/Panel/Calender';
import Instagram from '@/components/icons/footer/Instagram';
import Whatsapp from '@/components/icons/footer/Whatsapp';
import LinkedIn from '@/components/icons/footer/LinkedIn';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Landa Holding | Event',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function Page() {
  // const pathname = usePathname();
  // const slug = pathname?.replace('/magazine/', '');
  // const [cardData, setCardData] = useState<MagazineData>();
  // useEffect(() => {
  //   async function fetchTags() {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/details/${slug}/?format=json`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setCardData(data);
  //   }
  //   fetchTags();
  // }, [slug]);

  const cardData = [
    {
      title: 'Landa Holding | Event',
      date: {
        start: '2021-09-01',
        end: '2021-09-01',
        startTime: '10:00',
        endTime: '12:00',
      },
      tags: ['tag1', 'tag2', 'tag3'],
      location: 'Tehran',
      map: '/static/images/map.png',
      description1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      description2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: '/static/images/EventsBanner.png',
      people: [
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.png',
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.png',
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.png',
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.png',
        },
      ],
      description3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];

  return (
    <div>
      <Banner image="/static/images/EventsBanner.png" title="UPCOMING EVENTS" />
      <div className="md:mx-28 md:my-16 p-6 border shadow-md rounded-sm">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="md:w-2/3 flex flex-col gap-4">
            {cardData.map((card, index) => {
              return (
                <div key={index}>
                  <p className="font-barlow">{card.description1}</p>
                  <p className="font-barlow">{card.description2}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-around mt-5 mb-12 font-gilda">
                    {card.people.map((person, index) => {
                      return (
                        <div key={index} className="flex gap-2">
                          <div className="w-8 h-8 relative">
                            <Image
                              className="rounded-full object-cover"
                              src={person.image}
                              alt={person.title}
                              layout="fill"
                            />
                          </div>
                          {person.title}
                        </div>
                      );
                    }, [])}
                  </div>
                  <p className="font-barlow">{card.description3}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <input
                      className="w-[350px] h-[50px] p-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md"
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="w-[350px] h-[50px] p-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md"
                      type="text"
                      placeholder="email"
                    />
                    <input
                      className="w-[350px] h-[50px] p-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md"
                      type="text"
                      placeholder="Number"
                    />
                    <select className="w-[350px] h-[50px] pl-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md">
                      <option value="Select a number" disabled defaultChecked>
                        Select a number
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <Button
                    size="visit"
                    text="Register"
                    bgColor="Primary"
                    addedClass="mx-auto mt-[32px]"
                  />
                </div>
              );
            })}
          </div>
          {cardData.map((card, index) => {
            return (
              <div key={index} className="md:w-1/3">
                <Image
                  src={card.map}
                  alt={card.title}
                  width={505}
                  height={320}
                />
                <div className="flex flex-col gap-4 text-primary mt-6">
                  <div className="flex items-center gap-2 font-gilda">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <span>{card.location}</span>
                  </div>

                  <div key={index} className="flex gap-4">
                    {card.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 font-gilda"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-tag"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                          </svg>
                          <span key={index}>{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 font-gilda">
                    <Calender />
                    <span>{card.date.startTime}</span>
                    <span>{card.date.start}</span>
                  </div>
                  <div className="flex gap-2 font-gilda">
                    <Calender />
                    <span>{card.date.endTime}</span>
                    <span>{card.date.end}</span>
                  </div>
                  <button className="w-[174px] h-[50px] px-4 border border-black rounded-sm self-center md:self-end">
                    Add To Calender
                  </button>
                </div>
                <div className="bg-[#F8F5F0] font-gilda p-6 rounded-sm mt-10">
                  <span className="text-xl">Event sharing</span>
                  <div className="flex gap-5 my-6">
                    <Instagram />
                    <Whatsapp />
                    <LinkedIn />
                  </div>
                  <div className="flex gap-2">
                    <input
                      className="w-[350px] h-[50px] p-5 bg-[#FAFAFA] border border-[#E5E5E5]"
                      type="text"
                      placeholder="https://ddkksso.ddkke.aalhb.com"
                    />
                    <button className="w-[118px] h-[50px] p-2 border border-black rounded-sm self-end text-xs">
                      Copy the link
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
