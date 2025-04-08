'use client';
import React from 'react';

export default function Select({
  register,
  errors,
  nameInput,
  label,
  required,
  options,
  className,
  labelClass,
  placeholder,
  handleChange,
}: {
  register: any;
  errors: any;
  nameInput: string;
  label: string;
  required: string;
  options: Array<{ value: string; label: string }>;
  className: string;
  labelClass: string;
  placeholder: string;
  handleChange?: any;
  selected?: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={nameInput} className={`px-2 !text-[#6B6B6B] ${labelClass}`}>
        {label}
      </label>
      {/* TO DO : select placeholder has a problem */}
      <div className='w-full'>
        <select
          id={nameInput}
          {...register(nameInput, {
            required: required
          })}
          className={`w-full !rounded-sm get-shadow-sm focus:outline-none bg-transparent placeholder:text-[#939393B2] ${
            className + (errors[nameInput] ? ' border-red-500' : '')
          }`}
          onChange={handleChange}
          defaultValue={placeholder}
        >
          {/* <option disabled selected value={placeholder}>
            {selected ? selected : placeholder}
          </option> */}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errors[nameInput] && (
          <span className="mt-2 inline text-sm text-red-500">
            {errors[nameInput].message}
          </span>
        )}
      </div>

      <br />
    </div>
  );
}
