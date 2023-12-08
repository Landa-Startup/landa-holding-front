import * as React from 'react';
import Input from '../common/form/Input';
import CountryInput from '../common/form/CountryInput';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

export default function StartupFormPersonalInformation({
  register,
  errors,
  lang
}: {
  register: any;
  errors: any;
  lang: string;
}) {

  return (
    <>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">

        <PersonalInfoInput
          register={register}
          errors={errors}
          nameInputs={{
            firstName: "firstName",
            lastName: "lastName",
            phoneNumber: "",
            email: "email"
          }}
          lang={lang}
        />

        <Input
          register={register}
          errors={errors}
          nameInput="birthDate"
          type="date"
          label={lang === "en" ? "Date of Birth" : "تاریخ تولد"}
          required={lang === "en" ? "Date of Birth is Required." : "تاریخ تولد الزامی است"}
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
          placeholder={lang === "en" ? "Enter your Date of Birth" : "تاریخ تولد خود را وارد کنید"}
          className="input input-bordered mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <CountryInput
          register={register}
          errors={errors}
          nameInput='countrySelect'
          lang={lang}
        />
      </div>
    </>
  );
}
