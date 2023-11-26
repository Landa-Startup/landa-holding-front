import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from '@/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';

export default function StartupFormProperty({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-3xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] lg:w-[450px] xl:w-[650px] border-b ">
              Property
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
          </div>

          <TextArea
            title="How much revenue has your startup made since its inception?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="startupRevenue"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much is your monthly income?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="monthlyIncome"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        {/* <div className="col-span-2">
          <TextArea
            title="What is your current interest rate?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentInterestRate"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div> */}
        <div className="col-span-2">
          <TextArea
            title="How much current funding did you raise before starting your business?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentRaisedFunding"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much capital do you need to start your project?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="neededCapital"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
      </div>
    </>
  );
}
