import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
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
     <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-3xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] lg:w-[450px] xl:w-[650px] border-b ">
              Target Market
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
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
