'use client';
import React, { useState } from 'react';

// interface Props {
//   onRoleSelect: (role: string) => void;
// }

export default function TeamRolesContainer({
  roles,
  onRoleSelect
}: {
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  const [selectedRole, setSelectedRole] = useState<string | null>('All');
  function handleRoleClick(role: string) {
    onRoleSelect(role);
    setSelectedRole(role);
  }
  return (
    <div className="flex flex-wrap justify-center gap-1 md:gap-6 md: rtl:gap-9 pb-5  pt-10 font-barlow">
      {roles.map((role, index) => (
        <button
          onClick={() => handleRoleClick(role)}
          key={index}
          className={`btn btn-outline rounded-sm border-[#222] capitalize ${
            selectedRole === role ? 'bg-[#222] text-white' : 'text-[#222]'
          }`}
        >
          {role}
        </button>
      ))}
    </div>
  );
}
