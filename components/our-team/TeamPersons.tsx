'use client';
import React, { useEffect, useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
// TODO: read from i18n instead of statics
// import { personsEN, personsFA } from '../../app/[lang]/statics';
// import { rolesEN, rolesFA } from '../../app/[lang]/statics';

interface item {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
}

export default function TeamPersons() {
  const { lang } = useLang();
  const { t } = useTranslation(lang, 'ourTeam');

  // const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [filteredPersons, setFilteredPersons] = useState(Array<item>);
  

  // const L: Array<item> = t('persons', {returnObjects: true}).map((person: item) => {
  //   return person
  // })

  useEffect(() => {
    setFilteredPersons(t('persons', {returnObjects: true}));
  }, [])

  function handleRoleSelect(role: string) {
    // // setSelectedRole(role);
    // console.log(role);
    if (role === t("defaultRole") ) {
      setFilteredPersons(t('persons', { returnObjects: true }));
    } else {
      const persons = t('persons', {returnObjects: true})
      const filteredPersons = persons.filter(
        ({ category }: { category: string }) =>
          category?.toLowerCase().includes(role.toLowerCase())
      );
      setFilteredPersons(filteredPersons);
    }
  }
  console.log(filteredPersons)
  return (
    <div>
      <div className="flex w-full justify-center border">
        <TeamRolesContainer
          onRoleSelect={handleRoleSelect}
          roles={t('roles', { returnObjects: true })}
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 bg-[#FAFAFA] py-5 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {filteredPersons.map(
          (
            {
              image,
              position,
              name,
              linkedIn
            }: {
              image: string;
              position: string;
              name: string;
              linkedIn: string;
            },
            index: number
          ) => (
            <PersonalTab
              key={index}
              image={image}
              position={position}
              name={name}
              linkedIn={linkedIn}
            />
          )
        )}
      </div>
    </div>
  );
}
