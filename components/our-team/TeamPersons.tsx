'use client';
import React, { useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab';
import { useTranslation } from 'app/i18n/client';

interface Person {
  name: string;
  position: string;
  image: string;
  linkedIn: string;
  category: string;
}

export default function TeamPersons({ lang }: { lang: string }) {
  const { t } = useTranslation(lang, 'ourTeam');
  const [selectedRole, setSelectedRole] = useState<string>(t('roles.0'));
  const [filteredPersons, setFilteredPersons] = useState<Person[]>(
    t('persons', { returnObjects: true })
  );

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (role === 'all' || role === 'همه') {
      setFilteredPersons(t('persons', { returnObjects: true }));
    } else {
      const filtered = t('persons', { returnObjects: true }).filter(
        (person: Person) => person.category === role
      );
      setFilteredPersons(filtered);
    }
  };

  return (
    <div>
      <TeamRolesContainer
        lang={lang}
        selectedRole={selectedRole}
        handleRoleSelect={handleRoleSelect}
      />
      <div className="grid grid-cols-1 justify-items-center gap-4 bg-[#FAFAFA] py-5 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {filteredPersons.map((person: any, index: number) => (
          <PersonalTab
            key={index}
            image={person.image}
            position={person.position}
            name={person.name}
            linkedIn={person.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
