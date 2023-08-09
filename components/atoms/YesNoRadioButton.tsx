import React from 'react';

export default function YesNoRadioButton({
  title,
  register,
  errors,
  required,
  name,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className="flex items-center space-x-2 mt-2 cursor-pointer">
        <label>
          <input
            type="radio"
            value="yes"
            {...register(name, {
              required: required,
            })}
            className="form-radio h-4 w-4 text-indigo-600 dark:text-indigo-400"
          />
          <span>Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            {...register(name, {
              required: required,
            })}
            className="form-radio h-4 w-4 text-indigo-600 dark:text-indigo-400"
          />
          <span>No</span>
        </label>
      </div>
      {errors[name] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

///////////////////////////////////////

{/* <YesNoRadioButton
title="Do you agree?"
register={register}
errors={errors}
required="Please choose an option"
name="agree"
/> */}