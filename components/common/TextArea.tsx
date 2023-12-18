import React from 'react';

export default function TextArea({
  title,
  register,
  errors,
  required,
  nameTextArea,
  patternValue,
  patternMessage,
  placeholder,
  rows,
  cols,
}: {
  title?: string;
  register: any;
  errors: any;
  required: string;
  nameTextArea: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
  rows?: number;
  cols?: number;
}) {
  // Create a regular expression pattern for validation
  const pattern = new RegExp(patternValue);

  return (
    <div className='flex flex-col items-start'>
      {/* Label for the textarea */}
      {title && (<label className="px-2 text-lg text-[#6b6b6b] dark:text-current">{title}</label>)}
      <textarea
        rows={rows}
        cols={cols}
        className={
          'textarea textarea-bordered textarea-lg w-full mt-3 mb-1 drop-shadow-md text-sm placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]' +
          (errors[nameTextArea] ? ' border-red-500' : '')
        }
        {...register(nameTextArea, {
          required: required,
          pattern: {
            value: pattern,
            message: patternMessage,
          },
        })}
        placeholder={placeholder}
      />
      {errors[nameTextArea] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[nameTextArea].message}
        </span>
      )}
    </div>
  );
}
