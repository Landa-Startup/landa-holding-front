'use client';
import React, { useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab';
import { persons } from '../../app/[lng]/statics';
import { roles } from '../../app/[lng]/statics';

export default function TeamPersons() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  function handleRoleSelect(role: string) {
    setSelectedRole(role);
    console.log(role);
    if (role === 'All') {
      setFilteredPersons(persons);
    } else {
      const filteredPersons = persons.filter((person) =>
        person.category?.toLowerCase().includes(role.toLowerCase())
      );
      setFilteredPersons(filteredPersons);
    }
  }
  return (
    <div>
      <TeamRolesContainer onRoleSelect={handleRoleSelect} roles={roles} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:mx-auto md:container py-5 bg-[#FAFAFA] lg:grid-cols-3  xl:grid-cols-4">
        {filteredPersons.map((person, index) => (
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
