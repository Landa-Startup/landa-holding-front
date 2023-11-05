import React from 'react';
import PartnersDiamond from './PartnersDiamond';
import { partners1, partners2, partners3 } from '@/utils/statics';

export default function PartnersDiamondsContainer() {

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
