import React from 'react'
import { useState } from 'react';
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
    lang: string;
}

export default function CountryInput({
    register,
    errors,
    nameInput,
    lang
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
          label={lang === "en" ? 'Select a country:' : 'یک کشور را انتخاب کنید:'}
          required={lang === "en" ? 'Your Country is Required' : 'کشور شما الزامی است'}
          className='col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]'
          labelClass='text-[#6b6b6b] dark:text-current'
          placeholder={lang === "en" ? 'Select a country:' : 'یک کشور را انتخاب کنید:'}
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
            label={lang === "en" ? "City Of Residence" : "شهر محل سکونت"}
            required={lang === "en" ? "City Of Residence is Required." : "شهر محل سکونت الزامی است"}
            patternValue=""
            patternMessage=""
            placeholder={lang === "en" ? "Enter your City Of Residence" : "شهر محل سکونت خود را وارد کنید"}
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
    </>
  )
}