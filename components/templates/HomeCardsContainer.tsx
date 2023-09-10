import React from 'react';
import HomeCards from '../atoms/cards/HomeCards';

export default function HomeCardsContainer() {
  // Define data for the text card containers
  const cardData = [
    {
      title: 'Investment',
      text: 'At Landa Holding Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of $5 million or less. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.',
      reverse: false,
      show: true,
      index: 1,
      link: '/investment-registration',
      images: [
        {
          src: '/static/images/Home/Investment/male-female-business-people-working-tablet-office.png',
          alt: 'Landa Investment',
        },
        {
          src: '/static/images/Home/Investment/Rectangle 1412.png',
          alt: 'Landa Investment',
        },
      ],
    },
    {
      title: 'Acceleration',
      text: 'At Landa Holding Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts which helps individuals to accelerate their own business and expand their new creative startups. Landa Holding understands the challenges startups face. So, it offers comprehensive programs that address business development, and market expansion.',
      reverse: true,
      show: true,
      index: 2,
      link: '/startupsForm',
      images: [
        {
          src: '/static/images/Home/Acceleration/1.png',
          alt: 'Landa Holding Acceleration Center',
        },
        {
          src: '/static/images/Home/Acceleration/2.png',
          alt: 'Landa Holding Acceleration Center',
        },
      ],
    },
    {
      title: 'Academy',
      text: 'At Landa Holding Academy, we provide a nurturing place for individuals to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and through a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.',
      reverse: false,
      show: false,
      index: 3,
      link: '/academy',
      images: [
        {
          src: '/static/images/Home/Academy/3390782c4ef216a1fb0b67f2cc41660d 1.png',
          alt: 'Landa Holding Academy',
        },
        {
          src: '/static/images/Home/Academy/group-people-working-out-business-plan-office 1.png',
          alt: 'Landa Holding Academy',
        },
      ],
    },
  ];

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      {/* Background SVG */}
      <svg
        className="absolute top-[110px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="1092"
        height="2573"
        viewBox="0 0 1092 2573"
        fill="none"
      >
        {/* SVG Path for decorative background */}
        <path
          d="M0 152.749H709.675M709.675 152.749V0M709.675 152.749H798.634M709.675 152.749V765.5M709.675 2573V2489M1092 851.338H709.675V765.5M709.675 765.5H517M709.675 765.5V1429M709.675 1429V1469V1576.5M709.675 1429H549.5M709.675 2489H926M709.675 2489V2252.5M709.675 1726H355M709.675 1726V2252.5M709.675 1726V1576.5M709.675 2252.5H597.5M709.675 1576.5H943"
          stroke="#AA8453"
          strokeWidth="2" // Fixed attribute name from "stroke-width" to "strokeWidth"
        />
      </svg>

      {/* Map over cardData to create HomeTextCardContainers */}
      {cardData.map((data, index) => (
        <HomeCards
          key={index}
          titles={data.title} // Changed "titles" to "title"
          text={data.text}
          images={data.images}
          reverse={data.reverse}
        />
      ))}
    </div>
  );
}
