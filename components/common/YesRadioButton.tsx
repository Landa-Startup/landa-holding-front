import React from 'react';
import UploadInput from './UploadInput';

export default function YesRadioButton({
  title,
  register,
  errors,
  required,
  name,
  selectedRadio,
  handleRadioChange,
  handleFileChange,
  fileName,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
  selectedRadio: string;
  handleRadioChange: any;
  handleFileChange: any;
  fileName: string;
}) {

  let uploadInputTitle = ""
  switch (title) {
    case "Do you have Pitch deck?":
      uploadInputTitle = "Pitch deck file"
      break;
    case "Do you have Business Plan?":
      uploadInputTitle = "Business plan file"
      break
    case "Do you have Financial file?":
      uploadInputTitle = "Financial file"
    default:
      break;
  }

  return (
    <div>
      {/* Label for the radio buttons */}
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className="flex flex-col">
        {/* Radio buttons for 'Yes' and 'No' */}
        <div className="mt-4 flex flex-row rounded-lg bg-[#f9f6f3] p-4 drop-shadow-lg dark:bg-[#1D232A]">
          <label className="flex-column mr-10 flex ">
            <input
              type="radio"
              value="true"
              {...register(name, { required: required })}
              checked={selectedRadio === 'true'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 drop-shadow-lg dark:text-indigo-400"
            />
            <span>Yes</span>
          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              value=""
              {...register(name, { required:  'this file is requied!'})}
              checked={selectedRadio === ''}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 drop-shadow-lg  dark:text-indigo-400"
            />
            <span>No</span>
          </label>
        </div>

        {/* Conditional file input */}
        {selectedRadio === 'true' && (
          <div className="my-4 flex justify-center">
            <UploadInput
              title={uploadInputTitle}
              nameInput={uploadInputTitle}
              register={register}
              errors={errors}
              handleChange={handleFileChange}
            />
            {errors[fileName] && (
              <span className="mt-4 text-sm text-yellow-500">
                {errors[fileName].message}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Error message for radio buttons */}
      {errors[name] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
