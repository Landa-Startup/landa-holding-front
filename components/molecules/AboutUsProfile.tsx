import React from 'react'
import AboutUsProfileCard from './AboutUsProfileCard';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/About/4-1 1 (2).png',
      title: 'MORTEZA JAFARI',
      description: 'International Relations',
    },
    {
      image: '/static/images/About/4-1 1.png',
      title: 'Rasoul Moradimehr',
      description: 'CO-FOUNDER & CEO',
    },
    {
      image: '/static/images/About/4-1 1 (1).png',
      title: 'Hadi Hasanpour',
      description: 'CO-FOUNDER & INVESTOR'
    },
  ];



  return (
    <div className=''>
      <div className='flex flex-col m-8 text-black justify-items-center md:ps-24 md:ms-28'>
        <p className=' font-normal leading-normal tracking-widest font-Barlow-Condensed md:text-xl '> PROFESSIONALS</p>
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
