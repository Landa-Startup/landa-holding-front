import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import UploadInput from '../common/UploadInput';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';
import NoRadioButton from '../common/NoRadioButton';
import YesRadioButton from '../common/YesRadioButton';
import { ChangeEvent } from 'react';

export default function StartupFormBusinessModel({
  register,
  errors,
  handleFinancialFileChange,
}: {
  register: any;
  errors: any;
  handleFinancialFileChange: any;

}) {


  return (
    <>
  <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-3xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] lg:w-[450px] xl:w-[650px] border-b ">
              Business Model
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
          </div>
          <div>
            
          </div>
          <TextArea
            title="Describe the method of monetization of your plan?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="monetizationOfYourPlan"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="Please clearly mention the structure of your sales cycle from contact to delivery."
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="structureOfYourSales"
            patternMessage=""
            patternValue=""
            required="this is requried!"
          />
        </div>
        {/* <Input
          register={register}
          errors={errors}
        /> */}
        <UploadInput
          title='If your plan has a financial model, please upload'
        />
        {/* <div className="col-start-1 col-span-1">
          <label className="text-[#6b6b6b] dark:text-current">If your plan has a financial model, please upload</label>
          <div className='flex justify-center'>
            <input
              type="file"
              className="bg-[#f9f6f3] mt-3 p-5 w-full rounded-lg"
              {...register('financialFile', {
                required: '',
              })}
              onChange={handleFinancialFileChange} // must use onChange event handler after register
            />
          </div>
        </div> */}
        <div className="col-start-1 col-span-2">
          <TextArea
            title="Have you previously cooperated with investors or accelerators?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="cooperatedWithInvestors"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How did you hear about us?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="getToKnowUs"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
      </div>
    </>
  );
}
