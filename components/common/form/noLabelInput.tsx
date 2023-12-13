import React from 'react';
// import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

export default function noLabelInput({
  register,
  errors,
  nameInput,
  type,
  required,
  patternValue,
  placeholder,
  patternMessage,
  className,
  labelClass,
  containerClass,
}: {
  register: any;
  errors: any;
  nameInput: string;
  type: string;
  required:string;
  patternValue:string;
  patternMessage:string;
  placeholder:string;
  className:string;
  labelClass:string;
  containerClass?: string;
  inputValue?: string;
}) {
  
  const value = new RegExp(patternValue); // **don`t use slash (/) before and after regex pattern for this component and don`t use i end of regex pattern in this component
  return (
    <div className={`flex flex-col items-start ${containerClass}`}>
      <input
        id={nameInput}
        type={type}
        {...register(nameInput, {
          required: required,
          pattern: {
            value: value,
            message:patternMessage
          },
        })}
        placeholder={placeholder}
        className={className + (errors[nameInput] ? ' border-red-500' : '')}
        />
      {errors[nameInput] && (
        <span className="mt-4 px-2 text-sm text-yellow-500">
          {errors[nameInput].message}
        </span>
      )}
    </div>
  );
}
