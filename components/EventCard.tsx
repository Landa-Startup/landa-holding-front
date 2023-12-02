'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Calender from './icons/Panel/Calender';
import Button from './common/Button';
import Pin from './icons/Panel/Pin';
import Tag from './icons/Panel/Tag';
import Link from 'next/link';

interface Event {
  title: string;
  thumbnail: string;
  date: string;
  active?: boolean;
  price: number;
  slug: string;
}

export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://academy-back.landaholding.com/course/list?format=json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
    console.log(event);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts
  return (
    <div>
      {events.map((event, index) => (
        <Link
          key={index}
          href={'events/' + event.slug}
          className="flex flex-col md:flex-row gap-10 p-6 rounded-sm relative shadow-lg border-t border-black/10"
        >
          <Image
            className="rounded-sm object-cover"
            alt="Event"
            src="/static/images/event1.png"
            width={507}
            height={356}
          />
          <div className="flex flex-col gap-4">
            <span className="font-gilda text-3xl">Lorem Ipsum</span>
            <p className="font-barlow">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-col gap-4 font-gilda">
              <div className="flex gap-2 items-center">
                <Calender />
                <span className="text-primary">05/23/2024 Saturday</span>
              </div>
              <div className="flex gap-2 items-center">
                <Pin />
                <span className="text-primary">
                  Esfahan-Esfahan-nabsh Esfahan-p26
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Tag />
                <span className="text-primary">Investment</span>
              </div>
            </div>
          </div>
          <Button
            size="visit"
            text="Register"
            goto="/"
            addedClass="md:absolute bottom-6 right-6 self-center"
            bgColor="Primary"
          />
        </Link>
      ))}
    </div>
  );
}
