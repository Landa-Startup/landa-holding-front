'use client';
import React from "react";

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
  selected
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
    <div>

      <label htmlFor={nameInput} className={labelClass}>
        {label}
      </label>
      {/* TO DO : select placeholder has a problem */}
      <select
        id={nameInput}
        {...register(nameInput, {
          required: required,
        })}
        className={className + (errors[nameInput] ? ' border-red-500' : '')}
        onChange={handleChange}
      >
        <option disabled selected value={""}>
          {selected ? selected : placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[nameInput] && (
        <span className="mt-2 text-sm text-yellow-500">
          {errors[nameInput].message}
        </span>
      )}

      <br />
    </div>
  );
}
