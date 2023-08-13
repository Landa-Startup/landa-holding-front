  import React from 'react';

  export default function TextArea({
    title,
    halfSize,
    register,
    errors,
    required,
    nameTextArea,
    patternValue,
    patternMessage,
    placeholder
  }: {
    title: string;
    halfSize: boolean;
    register:any;
    errors:any;
    required:string;
    nameTextArea:string;
    patternValue:string;
    patternMessage:string;
    placeholder:string;
  }) {

    let value = new RegExp(patternValue);
    return (
      <div className={halfSize === true ? 'w-1/2' : 'w-full'}>
        <label className="text-lg font-medium">{title}</label>
        <textarea
          className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
          {...register(nameTextArea, {
            required: required,
            pattern: {
              value: value,
              message:patternMessage
            },
          })}
          placeholder={placeholder}
          //TODO: write below dynamic class name
          // className={className + (errors[nameInput] ? ' border-red-500' : '')}

        />
        {errors[nameTextArea] && (
          <span className="mt-4 text-sm text-yellow-500">
            {errors[nameTextArea].message}
          </span>
        )}
      </div>
    );
  }
