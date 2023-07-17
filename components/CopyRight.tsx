import React from 'react';

export default function CopyRight() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center top-[350px] absolute text-center text-white text-base font-normal">
      © {currentYear} by Landa Holding
    </div>
  );
}
