import React from 'react';
import CompaniesContainer from './CompaniesContainer';

export default function SubsidiaryCompanies() {
  return (
    <div className="px-28 py-10">
      <span className="text-4xl leading-6 font-gilda text-primary">
        Subsidiary companies of Landa Holding
      </span>
      <p className="font-barlow text-xl leading-8">
        Landa International Holding consists of 10 active companies operating in
        Canada and Iran, with offices in the cities of Toronto, Vancouver,
        Tehran, and Isfahan. Our mission is to invest in creative entrepreneurs,
        supporting them from the very beginning, starting with ideation, all the
        way to launching an international startup.
      </p>
      <CompaniesContainer />
    </div>
  );
}
