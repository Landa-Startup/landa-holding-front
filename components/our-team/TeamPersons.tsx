"use client"
import { useState, useEffect } from 'react';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab'

// TODO: move interface to a separate file
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
  const [filteredPersons, setFilteredPersons] = useState(Array<item>);
  
  useEffect(() => {
    setFilteredPersons(t('persons', {returnObjects: true}));
  }, [])

  function handleRoleSelect(role: string) {
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
