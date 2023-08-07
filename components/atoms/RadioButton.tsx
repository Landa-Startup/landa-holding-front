import React from 'react';

export default function RadioButton({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="radio"
        id="mvp"
        name="projectStage"
        value="mvp"
        // onChange={handleRadioChange}
        className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
      />
      <label htmlFor="mvp" className="text-lg font-medium">
        {text}
      </label>
    </div>
  );
}
