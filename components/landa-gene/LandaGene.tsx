'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { initialApplicationFormData } from '../../initials/initObjects';
import { LandaGeneFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import { submitLandaApplicationForm } from 'pages/api/landa-gene';

import { LandaGeneInput } from '@/components/landa-gene/LandageneInput';
// import ButtonRefactor from '../common/ButtonRefactor';
import Button from '../common/Button';
import Image from 'next/image';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import * as process from 'process';

export default function LandaGene() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LandaGeneFormData>({
    mode: 'onBlur',
    defaultValues: initialApplicationFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  const lang = useLang((s) => s.lang);

  const { t } = useTranslation(lang, 'landaGene');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
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
    submitLandaApplicationForm(sendFormData, csrfToken)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialApplicationFormData); // Country does not reset
        console.log('Form data sent successfully!');

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
        console.log(response);
      })
      .catch((error) => {
        console.error('Error sending form data:', error);

        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialApplicationFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
    <div className='my-20 flex flex-col items-start gap-24 '>
      <div className='mx-auto flex w-10/12 flex-col gap-x-8 md:flex-row md:justify-between'>
        <div className='basis-1/4'>
          <Image
            src='/static/images/gene-logo.svg'
            alt='gene-logo'
            className='hidden w-3/5 md:block'
            width={100}
            height={100}
          />
        </div>
        <div className='basis-3/4 '>
          <p
            className='text-justify font-sans text-[15px] leading-[48px] ltr:tracking-[2px] text-black lg:text-[20px]'>
            {t('textUp')}
          </p>
        </div>
      </div>

      <div className='mx-auto flex w-10/12 flex-col gap-8 md:flex-row-reverse md:justify-between'>
        <div className='basis-2/5'>
          <Image
            src='/static/images/gene.svg'
            alt='gene-1'
            className='h-full w-full p-0'
            width={100}
            height={100}
          />
        </div>
        <div className='basis-3/5'>
          <p
            className='w-full text-justify font-sans text-[15px]  leading-normal tracking-[0px] text-black  md:leading-[28px] lg:text-[20px] lg:leading-[40px]'>
            {t('textMid')}
          </p>
        </div>
      </div>

      <div className='mx-auto flex w-10/12 flex-col gap-8 md:flex-row md:justify-between'>
        <div className='basis-2/5 '>
          <Image
            src='/static/images/gene-2.svg'
            alt='gene-2'
            className='h-full w-full p-0'
            width={100}
            height={100}
          />
        </div>
        <div className='basis-3/5 '>
          <p
            className='w-full text-justify font-sans text-[15px] leading-normal tracking-[0px] text-black  md:leading-[28px] lg:text-[20px] lg:leading-[50px]'>
            {t('textDown')}
          </p>
        </div>
      </div>

      <div className='flex h-auto w-full items-start bg-[#F8F5F0] px-[32px] py-[31px]'>
        <div className='flex h-auto w-full flex-col  justify-between p-0'>
          <div className='flex w-full flex-col   p-0'>
            <p
              className={`w-full text-justify font-sans text-[18px] leading-normal  text-primary ${
                lang === 'en' ? 'md:tracking-[2px]' : ''
              }`}
            >
              {t('formText')}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex w-full flex-col items-center'>
            <div className='my-4 grid w-full grid-cols-1 gap-y-2 md:flex md:w-3/5 md:flex-col md:lg:w-[35%]'>
              <div className='flex w-full flex-col gap-x-4 md:flex-row'>
                <LandaGeneInput
                  register={register}
                  errors={errors}
                  nameInputs={{
                    full_name: 'full_name',
                    phone_number: 'phone_number'
                  }}
                  noLabel={true}
                />
              </div>

              <div className='col-span-1 w-full'>
                <Input
                  register={register}
                  errors={errors}
                  nameInput='email'
                  type='text'
                  required={t('emailRequired')}
                  patternValue='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                  patternMessage={t('emailErrorMessage')}
                  placeholder={t('emailPlaceholder')}
                  className='input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]'
                  containerClass='w-full'
                  labelClass=''
                />
              </div>

              <div className='col-span-1 w-full'>
                <Input
                  register={register}
                  errors={errors}
                  nameInput='company_name'
                  type='text'
                  required=''
                  patternValue=''
                  patternMessage=''
                  placeholder={t('companyNamePlaceholder')}
                  className='input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]'
                  containerClass='w-full'
                  labelClass=''
                />
              </div>
            </div>
            <div className='w-full text-center md:w-auto'>
              <Button
                type='submit'
                bgColor='Primary'
                disabled={errorsList[0] ? true : false}
                lang={lang}
              />
              {/*<ButtonRefactor type="submit" text="Submit" /> */}
            </div>
          </form>
          <NotificationSendForm />
        </div>
      </div>
    </div>





    // <div className='container w-10/12 mx-auto flex flex-col items-start gap-[3px] '>
    //   <div className='flex w-full flex-col md:flex-row md:justify-between md:ga my-20'>
    //     <div className='flex flex-col gap-[4px] p-0'>
    //       <div className='relative flex items-start p-0'>
    //         <Image
    //           src='/static/images/gene-logo.svg'
    //           alt='gene-logo'
    //           className='h-full w-full hidden md:block'
    //           width={100}
    //           height={100}
    //         />
    //       </div>
    //     </div>
    //
    //     <div
    //       className="flex w-full shrink-0  md:w-3/5 bg-[url('/static/images/Gene-logo-bg.png')] md:bg-none bg-no-repeat bg-center">
    //       <p
    //         className='w-full text-justify font-sans text-[15px] leading-10 tracking-[0px] text-black md:leading-[30px] lg:text-[20px] lg:leading-[40px]'>
    //         {t('textUp')}
    //       </p>
    //     </div>
    //   </div>
    //
    //   <div className='flex w-full flex-col gap-8 md:flex-row-reverse md:justify-between'>
    //     <div className='flex h-auto w-full shrink-0  md:w-1/2  lg:w-2/5 p-0'>
    //       <Image
    //         src='/static/images/gene.svg'
    //         alt='gene-1'
    //         className='h-full w-full p-0'
    //         width={100}
    //         height={100}
    //       />
    //       {/* <Image
    //         src="/static/images/gene-1.png"
    //         alt="gene-1"
    //         layout='fill'
    //       /> */}
    //     </div>
    //
    //     <div className='flex w-full shrink-0  md:w-1/2 lg:w-3/5 '>
    //       <p
    //         className='w-full text-justify font-sans text-[15px]  leading-normal tracking-[0px] text-black  md:leading-[28px] lg:text-[20px] lg:leading-[40px]'>
    //         {t('textMid')}
    //       </p>
    //     </div>
    //   </div>
    //
    //   <div className='flex w-full flex-col gap-8 md:flex-row md:justify-between'>
    //     <div className='flex  w-full shrink-0 md:w-1/2 lg:w-1/3 p-0'>
    //       <Image
    //         src='/static/images/gene-2.svg'
    //         alt='gene-2'
    //         className='h-full w-full p-0'
    //         width={100}
    //         height={100}
    //       />
    //     </div>
    //
    //     <div className='flex w-full shrink-0  md:w-1/2 lg:w-2/3'>
    //       <p
    //         className='w-full text-justify font-sans text-[15px] leading-normal tracking-[0px] text-black  md:leading-[28px] lg:text-[20px] lg:leading-[50px]'>
    //         {t('textDown')}
    //       </p>
    //     </div>
    //   </div>
    //
    //   <div className='flex h-auto w-full items-start bg-[#F8F5F0] px-[32px] py-[31px]'>
    //     <div className='flex h-auto w-full flex-col justify-between p-0'>
    //       <div className='flex w-full flex-col items-start p-0'>
    //         <p
    //           className={`w-full text-justify font-sans text-[18px] leading-normal  text-primary ${
    //             lang === 'en' ? 'md:tracking-[2px]' : ''
    //           }`}
    //         >
    //           {t('formText')}
    //         </p>
    //       </div>
    //
    //       <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col mt-10'>
    //         <div className='my-4 grid w-full grid-cols-1 gap-y-2 md:flex md:w-3/5 md:flex-col md:lg:w-[35%]'>
    //           <div className='flex w-full flex-col gap-x-4 md:flex-row'>
    //             <LandaGeneInput
    //               register={register}
    //               errors={errors}
    //               nameInputs={{
    //                 full_name: 'full_name',
    //                 phone_number: 'phone_number'
    //               }}
    //               noLabel={true}
    //             />
    //           </div>
    //
    //           <div className='col-span-1 w-full'>
    //             <Input
    //               register={register}
    //               errors={errors}
    //               nameInput='email'
    //               type='text'
    //               required={t('emailRequired')}
    //               patternValue='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
    //               patternMessage={t('emailErrorMessage')}
    //               placeholder={t('emailPlaceholder')}
    //               className='input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]'
    //               containerClass='w-full'
    //               labelClass=''
    //             />
    //           </div>
    //
    //           <div className='col-span-1 w-full'>
    //             <Input
    //               register={register}
    //               errors={errors}
    //               nameInput='company_name'
    //               type='text'
    //               required=''
    //               patternValue=''
    //               patternMessage=''
    //               placeholder={t('companyNamePlaceholder')}
    //               className='input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]'
    //               containerClass='w-full'
    //               labelClass=''
    //             />
    //           </div>
    //         </div>
    //         <div className='w-full text-center md:w-auto'>
    //           <Button
    //             type='submit'
    //             bgColor='Primary'
    //             disabled={errorsList[0] ? true : false}
    //             lang={lang}
    //           />
    //           {/*<ButtonRefactor type="submit" text="Submit" /> */}
    //         </div>
    //       </form>
    //       <NotificationSendForm />
    //     </div>
    //   </div>
    // </div>
  );
}