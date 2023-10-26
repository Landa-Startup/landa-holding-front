import React from 'react';
import PartnersDiamond from './PartnersDiamond';

export default function PartnersDiamondsContainer() {
  const partners = [
    {
      number: 1,
      alt: 'evimo',
    },
    {
      number: 2,
      alt: 'azad university',
    },
    {
      number: 3,
      alt: 'nekeoi',
    },
    {
      number: 4,
      alt: 'evimo',
    },
    {
      number: 5,
      alt: 'evimo',
    },
    {
      number: 6,
      alt: 'evimo',
    },
    {
      number: 7,
      alt: 'evimo',
    },
    {
      number: 8,
      alt: 'evimo',
    },
    {
      number: 9,
      alt: 'evimo',
    },
    {
      number: 10,
      alt: 'evimo',
    },
    {
      number: 11,
      alt: 'evimo',
    },
    {
      number: 12,
      alt: 'evimo',
    },
    // {
    //   number: 13,
    //   alt: 'evimo',
    // },
    {
      number: 14,
      alt: 'evimo',
    },
    {
      number: 15,
      alt: 'evimo',
    },
    // {
    //   number: 16,
    //   alt: 'evimo',
    // },
  ];
  return (
    <div className="grid grid-cols-7 mx-[450px] pb-20 pt-48">
      {partners.map((partner) => (
        <PartnersDiamond
          key={partner.number}
          backgroundImage={partner.number}
        />
      ))}
    </div>
  );
}
