import * as React from 'react';
import Input from '../common/form/Input';
import CountryInput from '../common/form/CountryInput';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

export default function StartupFormPersonalInformation({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">

        <PersonalInfoInput
          register={register}
          errors={errors}
          nameInputs={{
            firstName: "firstName",
            lastName: "lastName",
            phoneNumber: "",
            email: "email"
          }}
        />

        <Input
          register={register}
          errors={errors}
          nameInput="birthDate"
          type="date"
          label="Date of Birth"
          required="Date of Birth is Required."
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
          placeholder="Enter your Date of Birth"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <CountryInput
          register={register}
          errors={errors}
          nameInput='countrySelect'
        />
      </div>
    </>
  );
}
