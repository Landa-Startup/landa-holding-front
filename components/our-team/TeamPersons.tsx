"use client"
import React, { useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '../common/PersonalTab';

export default function TeamPersons() {
    const persons = [
        {
            image: '/static/images/our-team/Personals/a1.png',
            position: 'CEO',
            name: 'Dr.Rasoul Moradimehr',
            linkedIn: '',
            category: 'managers'
        },
        {
            image: '/static/images/our-team/Personals/a2.png',
            position: 'COTB',
            name: 'Dr.Hadi Hasanpour',
            linkedIn: '',
            category: 'managers'
        },
        {
            image: '/static/images/our-team/Personals/a10.png',
            position: 'Manager',
            name: 'Mehrnoosh Heibati',
            linkedIn: '',
            category: 'managers'
        },
        {
            image: '/static/images/our-team/Personals/a11.png',
            position: 'Case Manager',
            name: 'Mahsa Esmaeili',
            linkedIn: '',
            category: 'managers'
        },
        {
            image: '/static/images/our-team/Personals/a3.png',
            position: 'Secretary',
            name: 'Lida Parvizi',
            linkedIn: '',
            category: 'secretary'
        },
        {
            image: '/static/images/our-team/Personals/a4.png',
            position: 'Public Relations Officer',
            name: 'Kholoud Hariri',
            linkedIn: '',
            category: 'public relations officer'
        },
        {
            image: '/static/images/our-team/Personals/a35.jpg',
            position: 'Director of Public Relations',
            name: 'Arash Aryanik',
            linkedIn: '',
            category: 'public relations officer'
        },
        {
            image: '/static/images/our-team/Personals/a5.png',
            position: 'Accountant',
            name: 'Ali Soleimani',
            linkedIn: '',
            category: 'accountant'
        },
        {
            image: '/static/images/our-team/Personals/a6.png',
            position: 'CTO',
            name: 'Iman Nasr',
            linkedIn: '',
            category: 'mentors'
        },
        {
            image: '/static/images/our-team/Personals/a7.png',
            position: 'Full stack',
            name: 'Sajjad Momeni',
            linkedIn: '',
            category: 'mentors'
        },
        {
            image: '/static/images/our-team/Personals/a8.png',
            position: 'Full Stack',
            name: 'Amin Asgarian',
            linkedIn: '',
            category: 'programmers'

        },
        {
            image: '/static/images/our-team/Personals/a9.png',
            position: 'Digital Marketer',
            name: 'Ehsan Aliakbari',
            linkedIn: '',
            category: "digital marketer"
        },
        {
            image: '/static/images/our-team/Personals/a13.png',
            position: 'UX/UI Designer',
            name: 'Ariana Shafie',
            linkedIn: '',
            category: 'designers'
        },
        {
            image: '/static/images/our-team/Personals/a14.png',
            position: 'UX/UI Designer',
            name: 'Arshia Nasiri',
            linkedIn: '',
            category: 'designers'
        },

        {
            image: '/static/images/our-team/Personals/a15.png',
            position: 'Junior Back-end',
            name: 'Fatemeh Safi',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a16.png',
            position: 'Full Stack',
            name: 'Sobhan Emami',
            linkedIn: '',
            category: 'programmers'

        },
        {
            image: '/static/images/our-team/Personals/a17.png',
            position: 'Front-end',
            name: 'Fahimeh Sajjadi',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a18.png',
            position: 'Front-end',
            name: 'Saman Karchegani',
            linkedIn: '',
            category: 'programmers'
        },

        {
            image: '/static/images/our-team/Personals/a19.png',
            position: 'Front-end',
            name: 'Mohsen Kiani',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a20.png',
            position: 'Application Developer',
            name: 'Ali Khavari',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a21.png',
            position: 'Graphic Designer',
            name: 'Hoda Mahdi',
            linkedIn: '',
            category: 'designers'
        },
        {
            image: '/static/images/our-team/Personals/a22.png',
            position: 'Graphic Designer',
            name: 'Aynaz Reisi',
            linkedIn: '',
            category: 'designers'
        },

        {
            image: '/static/images/our-team/Personals/a23.png',
            position: 'Content Creator',
            name: 'Mahtab Hafizi',
            linkedIn: '',
            category: 'content creators'
        },
        {
            image: '/static/images/our-team/Personals/a24.png',
            position: 'UI designer',
            name: 'Saba Mokhtari',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a25.png',
            position: 'Content Creator',
            name: 'Tiam Safarian',
            linkedIn: '',
            category: 'content creators'
        },
        {
            image: '/static/images/our-team/Personals/a26.png',
            position: 'Word Press Developer',
            name: 'Roham Arabloo',
            linkedIn: '',
            category: 'programmers'
        },

        {
            image: '/static/images/our-team/Personals/a27.png',
            position: 'Full Stack',
            name: 'Meraj Bighamian',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a28.png',
            position: 'Front-end',
            name: 'Mahdi Salmanzadeh',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a29.png',
            position: 'Front-end',
            name: 'Mahrokh Lotfi',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a30.png',
            position: 'Front-end',
            name: 'Ramtin Foroozani',
            linkedIn: '',
            category: 'programmers'
        },

        {
            image: '/static/images/our-team/Personals/a31.png',
            position: 'Front-end',
            name: 'Barad Dehghani',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a32.png',
            position: 'Front-end',
            name: 'Matin Janghorbani',
            linkedIn: '',
            category: 'programmers'
        },
        {
            image: '/static/images/our-team/Personals/a33.png',
            position: 'Public Relations Officer',
            name: 'Gelareh Bahrami',
            linkedIn: '',
            category: 'public relations officer'
        },
        {
            image: '/static/images/our-team/Personals/a34.png',
            position: 'Graphic Designer',
            name: 'Faezeh Khani',
            linkedIn: '',
            category: 'designers'
        },
    ];
    const roles = [
        'All',
        'Managers',
        'Mentors',
        'Programmers',
        // 'Product Designer',
        "Designers",
        'Content Creators',
        'Accountant',
        'Public Relations',
        'Digital Marketer',
        'Secretary'
    ];

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