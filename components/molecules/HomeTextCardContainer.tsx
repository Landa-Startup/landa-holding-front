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
      <svg
        className="hidden md:block absolute left-[300px] top-[1050px]"
        xmlns="http://www.w3.org/2000/svg"
        width="1092"
        height="2573"
        viewBox="0 0 1092 2573"
        fill="none"
      >
        <path
          d="M0 152.749H709.675M709.675 152.749V0M709.675 152.749H798.634M709.675 152.749V765.5M709.675 2573V2489M1092 851.338H709.675V765.5M709.675 765.5H517M709.675 765.5V1429M709.675 1429V1469V1576.5M709.675 1429H549.5M709.675 2489H926M709.675 2489V2252.5M709.675 1726H355M709.675 1726V2252.5M709.675 1726V1576.5M709.675 2252.5H597.5M709.675 1576.5H943"
          stroke="#AA8453"
          stroke-width="2"
        />
      </svg>
      <svg
        className="md:hidden absolute left-0"
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="1407"
        viewBox="0 0 124 1407"
        fill="none"
      >
        <path
          d="M-168 44.5896H23.7162M23.7162 44.5896V0M23.7162 44.5896H47.7483M23.7162 44.5896V223.46M23.7162 428.822H123.5M23.7162 428.822V223.46M23.7162 428.822V370M23.7162 428.822V460.203V492.5V657.537M23.7162 223.46H-28.3342M23.7162 223.46V370M23.7162 370H-28.3342M23.7162 657.537H-5.5M23.7162 657.537V708V792.375V876.75M23.7162 1407V1370.5M23.7162 1370.5H76M23.7162 1370.5L24 1193.5M23.7162 876.75H-36M23.7162 876.75L24 976M24 976H47.5M24 976V1193.5M24 1193.5H-22.5"
          stroke="#AA8453"
        />
      </svg>
      <svg
        className="md:hidden absolute left-0"
        xmlns="http://www.w3.org/2000/svg"
        width="408"
        height="1408"
        viewBox="0 0 408 1408"
        fill="none"
      >
        <path
          d="M291.299 43.5178H383.61M383.61 43.5178V0M383.61 43.5178H407.667M383.61 43.5178V218.089M487 242.544H383.61V218.089M383.61 218.089V400.068V418.514V466.663M383.61 641.732V491.733V466.663M383.61 641.732H353.275M383.61 641.732V689.98M383.61 466.663H447.459M383.61 828.427V707.505V689.98M383.61 828.427H430.442M383.61 828.427V887.26M383.61 887.26V949.349V1012.94V1050.74M383.61 887.26H285.793M383.61 689.98H409.42M383.61 1408V1351.92M383.61 1050.74H457.97M383.61 1050.74V1146.63M0 786.617H14.0144M383.61 1351.92H340.349M383.61 1351.92V1312.36M383.61 1146.63V1211.22V1312.36M383.61 1146.63H353.363M383.61 1312.36H409.921"
          stroke="#AA8453"
        />
      </svg>
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-around px-14 py-24 font-gilda bg-whiteGold p-8"
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
