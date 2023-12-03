import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from '@/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';

export default function StartupFormTargetMarket({
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
              Target Market
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
        <TextArea
          title="Based on what characteristics do you decide who are your customers and who are not?"
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="customerCharacteristic"
          patternMessage=""
          patternValue=""
          required="this is required!"
        />
        </div>
        <div className="col-span-2">
          <TextArea
            title="Who are your current customers? How many customers have you had so far?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentCustomers"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How have you estimated the size of the market?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="estimatedMarketSize"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        {/* <div className="col-span-2">
          <TextArea
            title="How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="totalTamSamSom"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div> */}

      </div>
    </>
  );
}
