'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { initialApplicationFormData } from '../../initials/initObjects'
import { LandaGeneFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import Button from '../common/Button';
import { submitLandaApplicationForm } from 'pages/api/landa-gene';

import { useSubmit } from 'providers/StateProvider';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

export default function LandaGene(
  { lang, textUp, textMid, textDown, formText }: { lang: string, textUp: string, textMid: string, textDown: string, formText: string }
) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LandaGeneFormData>({
    mode: 'onBlur',
    defaultValues: initialApplicationFormData,
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleChangeSuccess,
    handleChangeReject
  } = useSubmit();

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("https://panel-back.landaholding.com/get-csrf-token");
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: LandaGeneFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    console.log(formData);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitLandaApplicationForm(sendFormData, csrfToken).then((response) => {
      handleChangeSuccess();
      reset(initialApplicationFormData); // Country does not reset
      console.log('Form data sent successfully!');

      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
      console.log(response);
    }).catch((error) => {
      console.error('Error sending form data:', error);

      handleChangeReject();
      reset(initialApplicationFormData);

      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }))

  console.log(errorsList);

  return (
    <div className='flex w-full flex-col items-start gap-[3px]'>
      <div className='flex w-full flex-col items-center p-4 md:flex-row md:justify-around md:gap-4'>
        <div className='flex flex-col items-center gap-[4px] p-0'>
          <div className='relative flex items-start p-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 179 229" fill="none" className='absolute'>
              <path fillRule="evenodd" clipRule="evenodd" d="M84.9384 194.675C94.2862 81.1799 168.309 50.1219 176.448 32.9844C182.143 20.9982 177.156 9.05347 161.526 3.00388C122.899 -11.95 120.992 40.9333 117.243 50.7554C85.4498 134.041 18.8225 158.334 11.2991 166.013C-8.62919 186.349 0.50454 214.56 26.5735 225.033C49.1766 234.112 82.5713 223.405 84.9384 194.675Z" fill="#274192" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="200" viewBox="0 0 222 318" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M199.299 224.677C67.7205 134.097 76.1345 33.8586 60.4503 13.0781C49.4806 -1.45799 31.9209 -4.68781 14.8814 7.51177C-27.2299 37.6597 35.6014 77.2806 45.1603 88.2232C126.218 181.019 114.21 268.639 118.829 282.041C131.061 317.543 170.888 327.961 199.769 307.886C224.809 290.48 232.606 247.607 199.299 224.677Z" fill="#274192" />
            </svg>
          </div>
          <p className='text-blue font-sans text-[15px] font-[600] leading-normal md:text-[25px]'>LANDA GENE</p>
        </div>

        <div className='flex w-full shrink-0 items-center p-4 md:w-3/5'>
          <p className='w-full text-justify font-sans text-[15px] font-[400] leading-normal tracking-[0px] text-black md:leading-[30px] lg:text-[25px] lg:leading-[40px]'>
            {textUp}
          </p>
        </div>
      </div>

      <div className='flex w-full flex-col items-center p-4 md:flex-row-reverse md:justify-around'>
        <div className='flex h-auto w-full shrink-0 p-4 md:h-[500px] md:w-1/2 lg:h-[450px] lg:w-2/5'>
          {/* <Image
              src="/static/images/gene-1.png"
              alt="gene-1"
              fill={true}
            /> */}
          <img
            src="/static/images/gene-1.png"
            alt="gene-1"
            className='h-full w-full'
          />
        </div>

        <div className='flex w-full shrink-0 items-center p-4 md:w-1/2 lg:w-3/5'>
          <p className='w-full text-justify font-sans text-[15px] font-[400] leading-normal tracking-[0px] text-black md:mt-2 md:leading-[28px] lg:text-[25px] lg:leading-[40px]'>
            {textMid}
          </p>
        </div>
      </div>

      <div className='flex w-full flex-col items-center p-4 md:flex-row md:justify-between'>
        <div className='flex h-auto w-full shrink-0 p-4 md:h-[350px] md:w-1/2 lg:h-[370px] lg:w-1/3'>
          {/* <Image
              src="/static/images/gene-1.png"
              alt="gene-1"
              fill={true}
            /> */}
          <img
            src="/static/images/gene-2.png"
            alt="gene-1"
            className='h-full w-full'
          />
        </div>

        <div className='flex w-full shrink-0 items-center p-4 md:w-1/2 lg:w-2/3'>
          <p className='w-full text-justify font-sans text-[15px] leading-normal tracking-[0px] text-black md:mt-2 md:leading-[28px] lg:text-[25px] lg:leading-[50px]'>
            {textDown}
          </p>
        </div>
      </div>

      <div className='flex h-auto w-full items-start bg-[#F8F5F0] px-[32px] py-[31px]'>
        <div className='flex h-auto w-full flex-col items-center justify-between p-0'>
          <div className='flex w-full flex-col items-start p-0'>
            <p className={`w-full text-justify font-sans text-[18px] leading-normal  text-primary ${lang === "en" ? "md:tracking-[2px]" : ""}`}>
              {formText}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='my-4 grid w-full grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>

              <PersonalInfoInput
                register={register}
                errors={errors}
                nameInputs={{
                  firstName: "name",
                  lastName: "",
                  email: "email",
                  phoneNumber: "phone"
                }}
                lang={lang}
              />

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="company"
                  type="text"
                  label={lang === "en" ? "Company Name" : "نام شرکت"}
                  required=""
                  patternValue=""
                  patternMessage=""
                  placeholder={lang === "en" ? "Name of Your Organization, if applicable" : "نام شرکت خود را در صورت امکان وارد کنید"}
                  className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                  containerClass='w-full'
                  labelClass=""
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                type='submit'
                bgColor="Primary"
                disabled={errorsList[0] ? true : false}
                lang={lang}
              />
            </div>
          </form>
          <NotificationSendForm />
        </div>
      </div>
    </div>
  );
}