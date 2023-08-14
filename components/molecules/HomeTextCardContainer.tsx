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
          <svg className='absolute left-[300px] top-[1050px]' xmlns="http://www.w3.org/2000/svg" width="1092" height="2573" viewBox="0 0 1092 2573" fill="none">
  <path d="M0 152.749H709.675M709.675 152.749V0M709.675 152.749H798.634M709.675 152.749V765.5M709.675 2573V2489M1092 851.338H709.675V765.5M709.675 765.5H517M709.675 765.5V1429M709.675 1429V1469V1576.5M709.675 1429H549.5M709.675 2489H926M709.675 2489V2252.5M709.675 1726H355M709.675 1726V2252.5M709.675 1726V1576.5M709.675 2252.5H597.5M709.675 1576.5H943" stroke="#AA8453" stroke-width="2"/>
</svg>
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-around py-24 font-gilda bg-whiteGold p-8"
        id="LandaHolding"
      >
        <TextCard
          text={text}
          image="/static/images/Home/Investment/male-female-business-people-working-tablet-office.png"
          show={show}
          reverse={false}
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
