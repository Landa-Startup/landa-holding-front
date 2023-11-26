import Image from 'next/image';
import React from 'react';
import Calender from './icons/Panel/Calender';
import Button from './common/Button';

export default function EventCard() {
  return (
    <div className="flex gap-10 px-4 py-6 border border-gray-400 rounded-sm relative shadow-md">
      <Image
        className="rounded-sm"
        alt="Event"
        src="/static/images/event1.png"
        width={500}
        height={320}
      />
      <div className="flex flex-col gap-4">
        <span className="font-gilda text-3xl">Lorem Ipsum</span>
        <p className="font-barlow">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Calender />
            <span className="text-primary">05/23/2024 Saturday</span>
          </div>
          <div>
            <span className="text-primary">
              Esfahan-Esfahan-nabsh Esfahan-p26
            </span>
          </div>
          <span className="text-primary">Investment</span>
        </div>
      </div>
      {/* <Button
        size="not"
        text="Register"
        goto="/"
        addedClass="absolute bottom-5 right-2"
      /> */}
    </div>
  );
}
