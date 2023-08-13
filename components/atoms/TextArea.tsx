import React from 'react';

export default function TextArea({
  title,
<<<<<<< HEAD
=======
  halfSize,
>>>>>>> origin/develop
  register,
  errors,
  required,
  nameTextArea,
  patternValue,
  patternMessage,
<<<<<<< HEAD
  placeholder,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  nameTextArea: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
}) {
=======
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

>>>>>>> origin/develop
  let value = new RegExp(patternValue);
  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <textarea
<<<<<<< HEAD
        className="textarea textarea-bordered textarea-lg w-full mt-3 mb-1 drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF] "
=======
        className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
>>>>>>> origin/develop
        {...register(nameTextArea, {
          required: required,
          pattern: {
            value: value,
<<<<<<< HEAD
            message: patternMessage,
=======
            message:patternMessage
>>>>>>> origin/develop
          },
        })}
        placeholder={placeholder}
        //TODO: write below dynamic class name
        // className={className + (errors[nameInput] ? ' border-red-500' : '')}
<<<<<<< HEAD
=======

>>>>>>> origin/develop
      />
      {errors[nameTextArea] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[nameTextArea].message}
        </span>
      )}
    </div>
  );
}
