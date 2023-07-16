import React from 'react';
import TextCard from './Textcard';
import ImageCard from './ImageCard';

export default function HomeTextCardContainer({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <TextCard text={text} />
      <ImageCard title={title} />
      <div className="w-[219px] h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 bg-stone-500 justify-center items-center inline-flex">
        <div className="text-center text-white text-2xl font-normal">
          Visit Now{' '}
        </div>
      </div>
    </div>
  );
}
