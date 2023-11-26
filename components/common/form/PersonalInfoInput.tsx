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
}

const PersonalInfoInput = ({
    register,
    errors,
    nameInputs
}: Props) => {
  return (
    <>
        {nameInputs?.firstName && <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.firstName}
            type="text"
            label={nameInputs.firstName}
            required="First Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your First Name"
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
            label={nameInputs.lastName}
            required="Last Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your Last Name"
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
            label="Email Address"
            required="Email Address is Required."
            patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            patternMessage="Enter a Valid Email Address"
            placeholder="Enter your Email Address"
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
            label="Phone Number"
            required="Phone Number is Required."
            patternValue="^[0-9]{11}$"
            patternMessage="Enter a Valid Phone Number"
            placeholder="Enter your Phone Number"
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