import React from 'react';
import Banner from '@/components/molecules/Banner';
import PersonalTab from '@/components/atoms/cards/PersonalTab';

export default function page() {
  const jobLinks = [
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
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },
    {
      "image": '/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png',
      "position": "front-end",
      "name": "Clarck Cookoe"

    },

    // Add other image names here
  ];

  return (
    <div>
      <Banner image="/static/images/our-team/Frame2916.png " title="Our Team" />
      <div className="flex flex-row justify-between pr-36 pl-36 pt-12 pb-10 sm:gap-4 flex-wrap">
        {jobLinks.map((job, index) => (
          <a key={job} href="#" className="hover:bg-black border p-1">
            {job}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 pl-32 pr-32 pb-28 sm:grid-cols-2 md:grid-cols-4">
        {persons.map((person, index) => (
          <PersonalTab key={index} image={person.image} position={person.position} name={person.name} />
        ))}
      </div>
    </div>
  );
}
