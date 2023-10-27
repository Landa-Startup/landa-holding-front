import React from 'react';
import PartnersDiamond from './PartnersDiamond';

export default function PartnersDiamondsContainer() {
  const partners1 = [
    {
      number: 1,
      alt: 'evimo',
    },
    {
      number: 2,
      alt: 'azad',
    },
    {
      number: 3,
      alt: 'nekoei',
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
  ];
  const partners2 = [
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
  ];
  const partners3 = [
    {
      number: 12,
      alt: 'evimo',
    },
    {
      number: 13,
      alt: 'evimo',
    },
    {
      number: 14,
      alt: 'evimo',
    },
    {
      number: 15,
      alt: 'evimo',
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap pt-48 mx-auto gap-14">
        {partners1.map((partner, index) => (
          <PartnersDiamond
            key={partner.number}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-14 mx-auto">
        {partners2.map((partner, index) => (
          <PartnersDiamond
            key={partner.number}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
      <div className="flex flex-wrap pb-20  mx-auto gap-14">
        {partners3.map((partner, index) => (
          <PartnersDiamond
            key={partner.number}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
    </div>
  );
}
