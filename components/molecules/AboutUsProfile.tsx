import React from 'react'
import AboutUsProfileCard from './AboutUsProfileCard';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/c1285c5aa4c31619ff4fd2173fac716a.jpg',
      title: 'info@landa.com',
      description: 'Diaco department manager',
    },
    {
      image: '/static/images/c1285c5aa4c31619ff4fd2173fac716a.jpg',
      title: 'victora Dan',
      description: 'Diaco department manager',
    },
    {
      image: '/static/images/c1285c5aa4c31619ff4fd2173fac716a.jpg',
      title: 'Enrico Brown',
      description: 'Diaco department manager',
    },
  ];



  return (
    <div>
      <div className='mb-11 mt-44	ml-[119px]'>
        <p className='text-black font-gilda text-2xl not-italic	font-normal	leading-normal '>PROFESSIONALS</p>
        <p className='text-black font-gilda text-4xl not-italic	font-normal	leading-normal	'> Managing Directors</p>

      </div >
      
      <div className="md:grid md:grid-cols-3 gap-4 md:mx-[119px] mb-52 flex flex-col mx-10">
          {cardsData.map((card, index) => (
            <AboutUsProfileCard key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        
     </div>
    </div>

  );
}
