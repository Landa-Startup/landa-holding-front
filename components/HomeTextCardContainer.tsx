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
      <div className="flex flex-row justify-around bg-stone-100 py-10">
        <TextCard text={text} />
        <ImageCard title={title} />
      </div>
    </div>
  );
}
