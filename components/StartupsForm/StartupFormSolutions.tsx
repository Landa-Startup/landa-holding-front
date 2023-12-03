import * as React from 'react';
import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';
import { preparationStatsOption } from '../../app/[lang]/statics'

export default function StartupFormSolutions({
  register,
  errors,
}:{
  register:any;
  errors:any;
}){

  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
              Solutions
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
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
