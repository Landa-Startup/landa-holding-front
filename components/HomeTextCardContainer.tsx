import React from 'react';
import TextCard from './Textcard';
import ImageCard from './ImageCard';

export default function HomeTextCardContainer({
  title,
  text,
  reverse,
}: {
  title: string;
  text: string;
  reverse: boolean;
}) {
  return (
    <div>
      <div className="flex flex-row justify-around bg-stone-100 py-10 items-center">
        <TextCard text={text} />
        <ImageCard
          reverse={false}
          title={title}
          imageOne="/static/images/male-female-business-people-working-tablet-office.png"
          imageTwo="/static/images/Rectangle 1412.png"
        />
      </div>
    </div>
  );
}
