import React from 'react';

export default function RadioButtonGroup({
  title,
  options,
  register,
  errors,
  required,
  nameRadioButton,
}: {
  title: string;
  options: Array<{ value: string; label: string }>;
  register: any;
  errors: any;
  required: string;
  nameRadioButton: string;
}) {
  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 mt-2 cursor-pointer"
        >
          <input
            type="radio"
            value={option.value}
            {...register(nameRadioButton, {
              required: required,
            })}
            className="form-radio h-4 w-4 text-indigo-600 dark:text-indigo-400"
          />
          <span>{option.label}</span>
        </label>
      ))}
      {errors[nameRadioButton] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[nameRadioButton].message}
        </span>
      )}
    </div>
  );
}

/////////////////////////////////////

// const genderOptions = [
//   { value: 'male', label: 'Male' },
//   { value: 'female', label: 'Female' },
//   { value: 'other', label: 'Other' },
// ];

/////////////////////////////////////

// {/* <RadioButtonGroup */}
//         title="Gender"
//         options={genderOptions}
//         register={register}
//         errors={errors}
//         required="Gender is required"
//         nameRadioButton="gender"
//       />
