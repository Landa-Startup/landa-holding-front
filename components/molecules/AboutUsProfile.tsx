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
    <div className='justify-items-center'>
      <div className='flex flex-col justify-items-center my-10  md:mx-36'>
        <p className='text-black font-normal font-Barlow-Condensed tracking-widest md:text-xl not-italic	leading-normal '>PROFESSIONALS</p>
        <p className='text-black font-gilda text-4xl not-italic	font-normal	leading-normal	'> Managing Directors</p>

      </div >
      
      <div className="md:grid md:grid-cols-3 mb-5 flex flex-col  md:justify-items-center sm:align-items-center">
          {cardsData.map((card, index) => (
            <AboutUsProfileCard key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        
     </div>
    </div>

  );
}
