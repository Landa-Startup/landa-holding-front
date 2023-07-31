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
      <div className="flex flex-row items-center justify-around py-10 font-gilda bg-whiteGold" id='LandaHolding'>
        <TextCard text={text} />
        <ImageCard
          reverse={false}
          title={title}
          imageOne="/static/images/Home/Investment/male-female-business-people-working-tablet-office.png"
          imageTwo="/static/images/Home/Investment/Rectangle 1412.png"
        />
      </div>
    </div>
  );
}
