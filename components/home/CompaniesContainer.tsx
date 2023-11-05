import React from 'react';
import CompaniesCard from './CompaniesCard';
import { companies } from '@/utils/statics';

export default function CompaniesContainer() {

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 md:gap-14 ">
      {companies.map((company, index) => (
        <CompaniesCard key={index} name={company.name} logo={company.logo} link={company.link} />
      ))}
    </div>
  );
}
