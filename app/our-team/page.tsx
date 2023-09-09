import React from 'react';
import Banner from '@/components/molecules/Banner';
import PersonalTab from '@/components/atoms/cards/PersonalTab';

export default function TeamPage() {
  const jobLinks = [
    'all',
    'Manager',
    'Word Press Developer',
    'Programmer',
    'Graphic Designer',
    'Content Creator',
    'Accountant',
    'Public Relations Officer',
    'Digital Marketer',
    'CEO',
    'COTB',
    'Secretary',
    'CTO',
    'Full stack',
    'Manager',
    'Case Manager',
    'UX/UI Designer',
    'Junior Back-end',
    'Application Developer',
    'UI designer',
    'Front-end',
    'Back-end',
  ];

  const persons = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      position: 'CEO',
      name: 'Dr.Rasoul Moradimehr',
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      position: 'COTB',
      name: 'Dr.Hadi Hasanpour',
    },
    {
      image: '/static/images/our-team/Personals/a3.png',
      position: 'Secretary',
      name: 'Lida Parvizi',
    },
    {
      image: '/static/images/our-team/Personals/a4.png',
      position: 'Public Relations Officer',
      name: 'Kholod Hariri',
    },
    {
      image: '/static/images/our-team/Personals/a5.png',
      position: 'Accountant',
      name: 'Ali Solaimani',
    },
    {
      image: '/static/images/our-team/Personals/a6.png',
      position: 'CTO',
      name: 'Iman Nasr',
    },
    {
      image: '/static/images/our-team/Personals/a7.png',
      position: 'Full stack',
      name: 'Sajad Momeni',
    },
    {
      image: '/static/images/our-team/Personals/a8.png',
      position: 'Full Stack',
      name: 'Amin Asgarian',
    },
    {
      image: '/static/images/our-team/Personals/a9.png',
      position: 'Digital Marketer',
      name: 'Ehsan Aliakbari',
    },
    {
      image: '/static/images/our-team/Personals/a10.png',
      position: 'Manager',
      name: 'Mernoosh Heibati',
    },

    {
      image: '/static/images/our-team/Personals/a11.png',
      position: 'Case Manager',
      name: 'Mahsa Esmaili',
    },
    {
      image: '/static/images/our-team/Personals/a12.png',
      position: 'Content Creator',
      name: 'Maryam Eskandari',
    },
    {
      image: '/static/images/our-team/Personals/a13.png',
      position: 'UX/UI Designer',
      name: 'Ariana Shafie',
    },
    {
      image: '/static/images/our-team/Personals/a14.png',
      position: 'UX/UI Designer',
      name: 'Arshia Nasiri',
    },

    {
      image: '/static/images/our-team/Personals/a15.png',
      position: 'Junior Back-end',
      name: 'Fateme Safi',
    },
    {
      image: '/static/images/our-team/Personals/a16.png',
      position: 'Full Stack',
      name: 'Sobhan Emami',
    },
    {
      image: '/static/images/our-team/Personals/a17.png',
      position: 'Front-end',
      name: 'Fahime Sajadie',
    },
    {
      image: '/static/images/our-team/Personals/a18.png',
      position: 'Front-end',
      name: 'Saman Karchegani',
    },

    {
      image: '/static/images/our-team/Personals/a19.png',
      position: 'Front-end',
      name: 'Mohsen Kiani',
    },
    {
      image: '/static/images/our-team/Personals/a20.png',
      position: 'Application Developer',
      name: 'Ali Khavari',
    },
    {
      image: '/static/images/our-team/Personals/a21.png',
      position: 'Graphic Designer',
      name: 'Hoda Mehdi',
    },
    {
      image: '/static/images/our-team/Personals/a22.png',
      position: 'Graphic Designer',
      name: 'Aynaz Reisi',
    },

    {
      image: '/static/images/our-team/Personals/a23.png',
      position: 'Content Creator',
      name: 'Mahtab Hafizi',
    },
    {
      image: '/static/images/our-team/Personals/a24.png',
      position: 'UI designer',
      name: 'Saba Mokhtari',
    },
    {
      image: '/static/images/our-team/Personals/a25.png',
      position: 'Content Creator',
      name: 'Tiam Safarian',
    },
    {
      image: '/static/images/our-team/Personals/a26.png',
      position: 'Word Press Developer',
      name: 'Roham Arablo',
    },

    {
      image: '/static/images/our-team/Personals/a27.png',
      position: 'Back-end',
      name: 'Meraj Bighamian',
    },
    {
      image: '/static/images/our-team/Personals/a28.png',
      position: 'Front-end',
      name: 'Mahdi Salmanzade',
    },
    {
      image: '/static/images/our-team/Personals/a29.png',
      position: 'Front-end',
      name: 'Mahrokh Lotfi',
    },
    {
      image: '/static/images/our-team/Personals/a30.png',
      position: 'Front-end',
      name: 'Ramtin Frozani',
    },

    {
      image: '/static/images/our-team/Personals/a31.png',
      position: 'Front-end',
      name: 'Barad Dehghani',
    },
    {
      image: '/static/images/our-team/Personals/a32.png',
      position: 'Front-end',
      name: 'matin Janghorbani',
    },
  ];

  return (
    <div>
      <Banner image="/static/images/our-team/Frame2916.png " title="Our Team" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center md:px-28 py-5 bg-[#FAFAFA]">
        {/* map over personals. */}
        {persons.map((person, index) => (
          <PersonalTab
            key={index}
            image={person.image}
            position={person.position}
            name={person.name}
          />
        ))}
      </div>
    </div>
  );
}
