import React from 'react'
import AboutUsProfileCard from './AboutUsProfileCard';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/3da2286a89c04026ee38ac3885c945f8.jpg',
      title: 'info@landa.com',
      description: '',
    },
    {
      image: '/static/images/c1285c5aa4c31619ff4fd2173fac716a.jpg',
      title: 'victora Dan',
      description: 'Diaco department manager',
    },
    {
      image: '/static/images/1eb7269bcb8bd4ffe72829f79fbc04f7.jpg',
      title: 'Enrico Brown',
      description: 'Diaco department manager',
    },
  ];



  return (

    <div>
      <div className='mb-11'>
        <p className='text-black font-gilda text-2xl not-italic	font-normal	leading-normal '>PROFESSIONALS</p>
        <p className='text-black font-gilda text-4xl not-italic	font-normal	leading-normal	'> Managing Directors</p>

      </div>
    <div className="grid grid-cols-3 gap-10">
        {cardsData.map((card, index) => (
          <AboutUsProfileCard key={index} image={card.image} title={card.title} description={card.description} />
        ))}



      
    </div>

    </div>
  );
}
