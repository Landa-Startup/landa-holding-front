import React from 'react'
import { useState } from 'react';
import { initialInvestorRegistrationFormData } from '../../../initials/initObjects'
import { InvestorRegistrationFormData } from '../../../types/global';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { countryList } from '../../../app/[lang]/statics';
import Select from '../../common/form/Select';
import Input from '../../common/form/Input';

const countriesData = countryList.map((country: string) => ({
    value : country,
    label : country,
}))

type Props = {
    register: any;
    errors: any;
    nameInput: string;
}

export default function CountryInput({
    register,
    errors,
    nameInput
}: Props) {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
    };

  return (
    <>
        <Select
          register={register}
          errors={errors}
          nameInput={nameInput}
          label='Select a country:'
          required='Your Country is Required'
          className='col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]'
          labelClass='text-[#6b6b6b] dark:text-current'
          placeholder='Select a Country'
          options={countriesData}
          handleChange={handleCountryChange}
          selected={selectedCountry}
        />

        <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput="provinceOfResidence"
            type="text"
            label="City Of Residence"
            required="City Of Residence is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your City Of Residence"
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
    </>
  )
}