import React from 'react';
import UploadInput from './UploadInput';

export default function TwoOptionRadio({
  title,
  hasUpload,
}: {
  title: string;
  hasUpload: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-medium">{title}</div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="pitchDeckYes"
            name="pitchDeckOption"
            value="yes"
            className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
          />
          <label htmlFor="pitchDeckYes" className="text-lg font-medium">
            Yes
          </label>
          <input
            type="radio"
            id="pitchDeckNo"
            name="pitchDeckOption"
            value="no"
            className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
          />
          <label htmlFor="pitchDeckNo" className="text-lg font-medium">
            No
          </label>
        </div>
        {hasUpload === true ? <UploadInput title="" /> : <></>}
      </div>
    </div>
  );
}
