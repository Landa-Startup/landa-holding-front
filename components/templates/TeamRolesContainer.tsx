import React from 'react';
import TeamRole from '../atoms/TeamRole';

export default function TeamRolesContainer() {
  const roles = [
    'all',
    'manager',
    'mentor',
    'programmer',
    'product designer',
    'content creator',
    'accountant',
    'Public Relations Officer',
    'Digital Marketer',
  ];
  return (
    <div className="bg-slate-50 flex justify-center gap-1 pt-10 pb-5 flex-wrap">
      {roles.map((role, index) => (
        <TeamRole key={index} title={role} />
      ))}
    </div>
  );
}
