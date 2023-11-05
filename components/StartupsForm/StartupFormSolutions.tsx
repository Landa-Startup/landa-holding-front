import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';
import { preparationStatsOption } from '../../utils/statics'

export default function StartupFormSolutions({
  register,
  errors,
}:{
  register:any;
  errors:any;
}){

  return (
    <>
<div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-3xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] lg:w-[450px] xl:w-[650px] border-b ">
              Solutions
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
          </div>
          <TextArea
            title="What is your unique value proposition (innovation)? What is new about what you do?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="solution"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <RadioButtonGroup
            title="How much is level of your product and technology preparation?"
            options={preparationStatsOption}
            register={register}
            errors={errors}
            required="Preparation Stats Required"
            nameRadioButton="productLevel"
          />
        </div>
        <div className="col-span-2 mt-2">
          <TextArea
            title="Briefly explain how your technology is scalable?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="scalable"
            patternMessage=""
            patternValue=""
            required="this is required"
          />
        </div>
      </div>
    </>
  );
}
