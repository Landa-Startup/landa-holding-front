import * as React from 'react';
import TextArea from '../common/TextArea';

export default function StartupFormProblem({
  register,
  errors,
}:{
  register:any;
  errors:any;
}) {

  return (
    <>
  <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
              Problems
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
        
          <TextArea
            title="Describe the customer problem you want to solve with your product or service."
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="customerProblem"
            patternMessage=""
            patternValue=""
            required="is Required."
          />
        </div>

      </div>
    </>
  );
}
