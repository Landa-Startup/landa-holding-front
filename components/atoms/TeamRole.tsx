import React from 'react';

export default function TeamRole({ title }: { title: string }) {
  return (
    <button className="btn btn-outline border-[#222] text-[#222] rounded-sm capitalize first:bg-[#222] first:text-white">
      {title}
    </button>
  );
}
