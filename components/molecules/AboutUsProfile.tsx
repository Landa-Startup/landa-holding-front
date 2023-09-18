import React from 'react';
import AboutUsProfileCard from './AboutUsProfileCard';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image:
        '/static/images/Home/Cooperation-members/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg',
      title: 'MORTEZA JAFARI',
      description: 'International Relations',
      links: {
        linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
        whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
        email: 'www.morteza_jafari49@yahoo.com',
        website: 'https://mortezajafari.ca/',
      },
    },
    {
      image: '/static/images/About/4-1 1.png',
      title: 'Rasoul Moradimehr',
      description: 'CO-FOUNDER & CEO',
      links: {
        linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
        whatsapp: 'wa.me/+989134233863',
        email: 'mailto:rasoulmoradimehr@gmail.com',
        website: 'https://moradimehr.com/',
      },
    },
    {
      image: '/static/images/About/4-1 1 (1).png',
      title: 'Hadi Hasanpour',
      description: 'CO-FOUNDER & INVESTOR',
      links: {
        linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
        whatsapp: 'https://wa.me/+12892693933',
        email: 'mailto:hadihasanpor@gmail.com',
        website: 'https://www.hadihasanpour.ca/',
      },
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col mx-8 py-5 text-black justify-items-center md:ps-24 md:ms-28">
        <h2 className="text-xl font-normal leading-normal tracking-widest font-condensed md:text-2xl">
          PROFESSIONALS
        </h2>
        <h1 className="text-3xl font-normal leading-normal font-gilda md:text-4xl">
          Managing Directors
        </h1>
      </div>

      <div className="flex flex-col mx-8 md:grid md:grid-cols-3 md:gap-8 md:mx-20 md:px-32">
        {cardsData.map((card, index) => (
          <AboutUsProfileCard
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            links={card.links}
          />
        ))}
      </div>
    </div>
  );
}
