import React from 'react';

export default function TextArea({
  title,
  placeHolder,
  halfSize,
}: {
  title: string;
  placeHolder: string;
  halfSize: boolean;
}) {
  return (
    <div className={halfSize === true ? 'w-1/2' : 'w-full'}>
      <label className="text-lg font-medium">{title}</label>
      <textarea
        className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
        placeholder={placeHolder}
      />
    </div>
  );
}
