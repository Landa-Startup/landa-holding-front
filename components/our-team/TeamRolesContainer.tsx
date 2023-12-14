'use client';
import { useTranslation } from 'app/i18n/client';
import React from 'react';

export default function TeamRolesContainer({
  lang,
  selectedRole,
  handleRoleSelect
}: {
  lang: string;
  selectedRole: string;
  handleRoleSelect: (role: string) => void;
}) {
  const { t } = useTranslation(lang, 'ourTeam');

  return (
    <div className="flex w-[95%] overflow-auto max-w-[90%] pl-10 border justify-center gap-1 bg-slate-50  pb-5  pt-10 font-barlow">
      {t('roles', { returnObjects: true }).map((role: any, index: number) => (
        <button
          onClick={() => handleRoleSelect(role)}
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
