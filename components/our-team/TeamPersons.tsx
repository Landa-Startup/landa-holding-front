"use client"
import React, { useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab'
import { personsEN, personsFA } from '../../app/[lang]/statics';
import { rolesEN, rolesFA } from '../../app/[lang]/statics';

export default function TeamPersons(
    { lang }: { lang: string }
) {


    // const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [filteredPersons, setFilteredPersons] = useState(lang === "en" ? personsEN : personsFA);

    function handleRoleSelect(role: string) {
        // setSelectedRole(role);
        // console.log(role);
        if (role === 'All' || role === 'همه') {
            setFilteredPersons(lang === "en" ? personsEN : personsFA);
        } else {
            const persons = lang === "en" ? personsEN : personsFA
            const filteredPersons = persons.filter((person) =>
                person.category?.toLowerCase().includes(role.toLowerCase())
            );
            setFilteredPersons(filteredPersons);
        }
    }
    return (
        <div>
            <TeamRolesContainer onRoleSelect={handleRoleSelect} roles={lang === "en" ? rolesEN : rolesFA} />
            <div className="grid grid-cols-1 justify-items-center gap-4 bg-[#FAFAFA] py-5 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
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
