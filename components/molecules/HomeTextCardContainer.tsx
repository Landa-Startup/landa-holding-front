import React from 'react';
import TextCard from '../atoms/cards/Textcard';
import ImageCard from '../atoms/cards/ImageCard';

export default function HomeTextCardContainer({
  title,
  text,
  reverse,
  show,
}: {
  title: string;
  text: string;
  reverse: boolean;
  show: boolean;
}) {
  return (
    <div>
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-around py-10 font-gilda bg-whiteGold p-8"
        id="LandaHolding"
      >
        <TextCard
          text={text}
          image="/static/images/Home/Investment/male-female-business-people-working-tablet-office.png"
          show={show}
        />
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
