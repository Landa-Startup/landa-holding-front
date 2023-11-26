import React from 'react';
// import AboutUsProfileCard from './AboutUsProfileCard';
import AboutUsPersonalTabs from '@/components/about/AboutusPersonalTabs';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/About/moradimehr.png',
      name: 'Rasoul Moradimehr',
      position: ' CEO',
      links: {
        linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
        whatsapp: 'wa.me/+989134233863',
        email: 'mailto:rasoulmoradimehr@gmail.com',
        website: 'https://moradimehr.com/',
        instagram:
          'https://instagram.com/dr.moradimehr.rasoul?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/About/mjafari.png',
      name: 'MORTEZA JAFARI',
      position: 'International Relations',
      links: {
        linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
        whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
        email: 'mailto:morteza_jafari49@yahoo.com',
        website: 'https://mortezajafari.ca/',
        instagram:
          'https://instagram.com/jafari.irimmigration.ca?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      name: 'Hadi Hasanpour',
      position: 'COTB',
      links: {
        linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
        whatsapp: 'https://wa.me/+12892693933',
        email: 'mailto:hadihasanpor@gmail.com',
        website: 'https://www.hadihasanpour.ca/',
        instagram:
          'https://instagram.com/dr.hadihasanpour?igshid=MzRlODBiNWFlZA==',
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center md:items-start md:ml-36 mt-8 mb-11 text-black">
        <h2 className="text-xl font-normal leading-normal tracking-widest font-condensed md:text-2xl">
          PROFESSIONALS
        </h2>
        <h1 className="text-3xl font-normal leading-normal font-gilda md:text-4xl">
          Board of Directors
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {cardsData.map((card, index) => (
          <AboutUsPersonalTabs
            key={index}
            image={card.image}
            name={card.name}
            position={card.position}
            linkedIn={card.links.linkedin}
            email={card.links.email}
            website={card.links.website}
            instagram={card.links.instagram}
          />
        ))}
      </div>
    </div>
  );
}
