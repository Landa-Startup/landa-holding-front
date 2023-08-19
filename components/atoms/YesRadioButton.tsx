import React, { ChangeEvent } from 'react';

export default function YesRadioButton({
  title,
  register,
  errors,
  required,
  name,
  selectedRadio,
  handleRadioChange,
  handleChangeFile,
  fileName,

}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
  selectedRadio: string;
  handleRadioChange:any;
  handleChangeFile:any;
  fileName:string;

}) {

  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className='flex flex-col'>
        <div className="flex flex-row mt-4 bg-[#f9f6f3] dark:bg-[#1D232A] p-4 rounded-lg drop-shadow-lg">
          <label className="flex flex-column mr-10 ">
            <input
              type="radio"
              value="true"
              {...register(name, {
                required: required,
              })}
              checked={selectedRadio === 'true'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
            />
            <span>Yes</span>
          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              value=""
              
              {...register(name, {
                required: required,
              })}
              checked={selectedRadio === ''}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400  drop-shadow-lg"
            />
            <span>No</span>
          </label>
        </div>
        {(() => {
            if (Boolean(selectedRadio) === true) {
              return (
                <div className='flex justify-center '>
                <input
                  type="file"
                  className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
                  value=""
                  {...register(fileName, {
                    required: '',
                  })}
                  onChange={handleChangeFile} // must use onChange event handler after register
                />
                      {errors[fileName] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[fileName].message}
        </span>
      )}
              </div>
              );
            }
            else{
              return <div></div>
            }
            })()}

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

{
  /* <YesRadioButton
title="Do you agree?"
register={register}
errors={errors}
required="Please choose an option"
name="agree"
/> */
}
