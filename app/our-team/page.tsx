import React from 'react';
import Banner from '@/components/molecules/Banner';
import PersonalTab from '@/components/atoms/cards/PersonalTab';

export default function page() {
  const jobLinks = [
    'all',
    'Manager',
    'Mentor',
    'Programmer',
    'Product Designer',
    'Content Creator',
    'Accountant',
    'Public Relations Officer',
    'Digital Marketer',
  ];

  const persons = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      position: 'Manager',
      name: 'Dr.Rasoul Moradimehr',
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      position: 'Manager',
      name: 'Dr.Hadi Hasanpour',
    },
    {
      image: '/static/images/our-team/Personals/a3.png',
      position: 'front-end',
      name: 'Lida Parvizi',
    },
    {
      image: '/static/images/our-team/Personals/a4.png',
      position: 'front-end',
      name: 'Kholod Hariri',
    },
    {
      image: '/static/images/our-team/Personals/a5.png',
      position: 'front-end',
      name: 'Ali Solaimani',
    },
    {
      image: '/static/images/our-team/Personals/a6.png',
      position: 'front-end',
      name: 'Iman Nasr',
    },
    {
      image: '/static/images/our-team/Personals/a7.png',
      position: 'front-end',
      name: 'Sajad Momeni',
    },
    {
      image: '/static/images/our-team/Personals/a8.png',
      position: 'front-end',
      name: 'Amin Asgarian',
    },
    {
      image: '/static/images/our-team/Personals/a9.png',
      position: 'front-end',
      name: 'Ehsan Aliakbari',
    },
    {
      image: '/static/images/our-team/Personals/a10.png',
      position: 'front-end',
      name: 'Mernoosh Heibati',
    },

    {
      image: '/static/images/our-team/Personals/a11.png',
      position: 'front-end',
      name: 'Mahsa Esmaili',
    },
    {
      image: '/static/images/our-team/Personals/a12.png',
      position: 'front-end',
      name: 'Maryam Eskandari',
    },
    {
      image: '/static/images/our-team/Personals/a13.png',
      position: 'front-end',
      name: 'Ariana Shafie',
    },
    {
      image: '/static/images/our-team/Personals/a14.png',
      position: 'front-end',
      name: 'Arshia Nasiri',
    },

    {
      image: '/static/images/our-team/Personals/a15.png',
      position: 'front-end',
      name: 'Fateme Safi',
    },
    {
      image: '/static/images/our-team/Personals/a16.png',
      position: 'front-end',
      name: 'Sobhan Emami',
    },
    {
      image: '/static/images/our-team/Personals/a17.png',
      position: 'front-end',
      name: 'Fahime Sajadie',
    },
    {
      image: '/static/images/our-team/Personals/a18.png',
      position: 'front-end',
      name: 'Saman Karchegani',
    },

    {
      image: '/static/images/our-team/Personals/a19.png',
      position: 'front-end',
      name: 'Mohsen Kiani',
    },
    {
      image: '/static/images/our-team/Personals/a20.png',
      position: 'front-end',
      name: 'Ali Khavari',
    },
    {
      image: '/static/images/our-team/Personals/a21.png',
      position: 'front-end',
      name: 'Hoda Mehdi',
    },
    {
      image: '/static/images/our-team/Personals/a22.png',
      position: 'front-end',
      name: 'Aynaz Reisi',
    },

    {
      image: '/static/images/our-team/Personals/a23.png',
      position: 'front-end',
      name: 'Mahtab Hafizi',
    },
    {
      image: '/static/images/our-team/Personals/a24.png',
      position: 'front-end',
      name: 'Saba Mokhtari',
    },
    {
      image: '/static/images/our-team/Personals/a25.png',
      position: 'front-end',
      name: 'Tiam Safarian',
    },
    {
      image: '/static/images/our-team/Personals/a26.png',
      position: 'front-end',
      name: 'Roham Arablo',
    },

    {
      image: '/static/images/our-team/Personals/a27.png',
      position: 'front-end',
      name: 'Meraj Bighamian',
    },
    {
      image: '/static/images/our-team/Personals/a28.png',
      position: 'front-end',
      name: 'Mahdi Salmanzade',
    },
    {
      image: '/static/images/our-team/Personals/a29.png',
      position: 'front-end',
      name: 'Mahrokh Lotfi',
    },
    {
      image: '/static/images/our-team/Personals/a30.png',
      position: 'front-end',
      name: 'Ramtin Frozani',
    },

    {
      image: '/static/images/our-team/Personals/a31.png',
      position: 'front-end',
      name: 'Barad Dehghani',
    },
    {
      image: '/static/images/our-team/Personals/a32.png',
      position: 'front-end',
      name: 'matin Janghorbani',
    },
  ];

  return (
    <div>
      <Banner image="/static/images/our-team/Frame2916.png " title="Our Team" />
      {/* <div className="flex flex-row justify-between  lg:px-36  py-12 px-16 gap-3 flex-wrap">
        {jobLinks.map((job, index) => (
          <a key={job} href="#" className="hover:bg-black hover:text-white border py-1 px-3">
            {job}
          </a>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center md:px-28 py-5 bg-[#FAFAFA]">
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
