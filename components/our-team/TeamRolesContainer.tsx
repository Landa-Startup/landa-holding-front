'use client';
import React from 'react';
import { useSubmit } from 'stores/submitStore';

export default function TeamRolesContainer({
  roles,
  onRoleSelect
}: {
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  const {selectedRole, updateRole} = useSubmit();

  function handleRoleClick(role: string) {
    onRoleSelect(role);
    updateRole(role);
  }
  return (
    <div className="flex flex-wrap justify-center gap-1 bg-slate-50  pb-5  pt-10 font-barlow">
      {/* TODO: use <Button> component instead of button input */}
      {roles.map((role, index) => (
        <button
          onClick={() => handleRoleClick(role)}
          key={index}
          className={`btn btn-outline rounded-sm border-[#222] capitalize ${selectedRole === role ? 'bg-[#222] text-white' : 'text-[#222]'}`}>
          {role}
        </button>
      ))}
    </div>
  );
}
