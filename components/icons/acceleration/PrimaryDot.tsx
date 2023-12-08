import React from 'react';

export default function PrimaryDot({ addedClass }: { addedClass?: string }) {
  return (
    <svg
      className={`h-4 w-4 ${addedClass}`}
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <circle id="Ellipse 169" cx="16.5" cy="16" r="16" fill="#CCB598" />
    </svg>
  );
}
