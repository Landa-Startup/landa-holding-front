import React from 'react';
import TextCard from '../atoms/cards/Textcard';
import ImageCard from '../atoms/cards/ImageCard';

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
      <div className="flex flex-row font-gilda justify-around bg-whiteGold py-10 items-center" id='LandaHolding'>
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
