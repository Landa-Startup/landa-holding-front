import React from 'react';

export default function Chevron({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <>
      {direction === 'left' ? (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 md:w-10 h-6 md:h-10 bi bi-chevron-left cursor-pointer text-white hover:text-primary"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      ) : (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 md:w-10 h-6 md:h-10 bi bi-chevron-right cursor-pointer text-white hover:text-primary"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      )}
    </>
  );
}
