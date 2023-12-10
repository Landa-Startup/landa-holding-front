import React from 'react'
import { useState } from 'react';
import Select from '../../common/form/Select';
import Input from '../../common/form/Input';
import { useTranslation } from 'app/i18n/client';



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
  const { t } = useTranslation(lang, 'countryInput');
  const countriesData = t('countries',{ returnObjects: true }).map((country: string) => ({
    value: country,
    label: country,
  }))
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
        label={t('countryName')}
        required={t('countryNameRequired')}
        className='input input-bordered col-span-1 mb-1 mt-4 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]'
        labelClass='text-[#6b6b6b] dark:text-current'
        placeholder={t('countryNamePlaceholder')}
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
          label={t('provinceOfResidence')}
          required={t('provinceOfResidenceRequired')}
          patternValue=""
          patternMessage=""
          placeholder={t('provinceOfResidencePlaceholder')}
          className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
      </div>
    </>
  )
}