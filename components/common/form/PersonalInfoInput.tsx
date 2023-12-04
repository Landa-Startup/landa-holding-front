import React from 'react'
import Input from '../../common/form/Input';

type Props = {
    register: any;
    errors: any;
    nameInputs?: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    };
    lang: string
}

const PersonalInfoInput = ({
    register,
    errors,
    nameInputs,
    lang
}: Props) => {

  return (
    <>
        {nameInputs?.firstName && <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.firstName}
            type="text"
            label={lang === "en" ? "First Name" : "نام"}
            required={lang === "en" ? "First Name is Required." : "نام الزامی است"}
            patternValue=""
            patternMessage=""
            placeholder={lang === "en" ? "Enter your First Name" : " نام خود را وارد کنید"}
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>}

        {nameInputs?.lastName && <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.lastName}
            type="text"
            label={lang === "en" ? "Last Name" : "نام خانوادگی"}
            required={lang === "en" ? "Last Name is Required." : "نام خانوادگی الزامی است"}
            patternValue=""
            patternMessage=""
            placeholder={lang === "en" ? "Enter your Last Name" : "نام خانوادگی خود را وارد کنید"}
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>}

        {nameInputs?.email && <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.email}
            type="email"
            label={lang === "en" ? "Email Address" : "ایمیل"}
            required={lang === "en" ? "Email Address is Required." : "ایمیل الزامی است"}
            patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            patternMessage={lang === "en" ? "Enter a Valid Email Address" : "یک ایمیل معتبر وارد کنید"}
            placeholder={lang === "en" ? "Enter your Email Address" : "ایمیل خود را وارد کنید"}
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>}

        {nameInputs?.phoneNumber && <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.phoneNumber}
            type="text"
            label={lang === "en" ? "Phone Number" : "شماره تلفن"}
            required={lang === "en" ? "Phone Number is Required." : "شماره تلفن الزامی است"}
            patternValue="^[0-9]{11}$"
            patternMessage={lang === "en" ? "Enter a Valid Phone Number" : "یک شماره تلفن معتبر وارد کنید"}
            placeholder={lang === "en" ? "Enter your Phone Number" : "شماره تلفن خود را وارد کنید"}
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>}
    </>
  )
}

export {
    PersonalInfoInput
}