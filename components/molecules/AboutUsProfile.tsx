import React from 'react'
import AboutUsProfileCard from './AboutUsProfileCard';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/About/4-1 1.png',
      title: 'info@landa.com',
      description: 'Diaco department manager',
    },
    {
      image: '/static/images/About/4-1 1 (1).png',
      title: 'victora Dan',
      description: 'Diaco department manager',
    },
    {
      image: '/static/images/About/4-1 1 (2).png',
      title: 'Enrico Brown',
      description: 'Diaco department manager',
    },
  ];



  return (
    <div className=''>
      <div className='flex flex-col m-8 text-black justify-items-center md:ps-24 md:ms-28'>
        <p className='not-italic font-normal leading-normal tracking-widest font-Barlow-Condensed md:text-xl '> PROFESSIONALS</p>
        <p className='text-3xl font-normal leading-normal font-gilda md:text-4xl '>Managing Directors</p>
      </div >
      
      <div className="flex flex-col m-8 md:grid md:grid-cols-3 md:gap-8 md:mx-20 md:px-32 ">
          {cardsData.map((card, index) => (
            <AboutUsProfileCard key={card.title} image={card.image} title={card.title} description={card.description} />
          ))}
      </div>
    </div>

  );
}