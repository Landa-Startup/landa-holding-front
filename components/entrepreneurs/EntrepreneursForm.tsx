'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { Entrepreuneur } from '../../types/global';
// import EntrepreneursTitle from './EntrepreneursTitle';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialFormData } from '../../initials/initObjects';
import { submitEntrepreneurForm } from '../../pages/api/entrepreneurs';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
// import ButtonRefactor from '../common/ButtonRefactor';
import Button from '../common/Button';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/submitStore';
import FormTitle from '../common/form/FormTitle';

export default function EntrepreneursForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
  } = useSubmit((s) => s)

  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, "formComponent")

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        'https://panel-back.landaholding.com/get-csrf-token'
      );
      handleTokenChange(token);
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: Entrepreuneur) => {
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

    console.log(sendFormData);

    // Send the form data to the API.
    submitEntrepreneurForm(sendFormData, csrfToken)
      .then((response) => {
        console.log(response);

        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialFormData); // country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }))

  return (
    <>
      <div className="container m-[-1rem] mx-auto my-20 px-5 font-barlow lg:p-20 gap-y-0">
        <div className='bg-[#F8F5F0]'>
        <FormTitle formName='entrepreneurForm' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <div className="mb-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3 bg-[#F8F5F0] p-4">
            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                phoneNumber: 'phone'
              }}
            />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label={t('companyName')}
                required={t('companyNameRequired')}
                placeholder={t('companyNamePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="website"
                type="text"
                label={t('website')}
                required={t('websiteRequired')}
                placeholder={t('websitePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="fieldOfProfessional"
                type="text"
                label={t('prosField')}
                required={t('prosFieldRequired')}
                placeholder={t('prosFieldPlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
          </div>
          <div className="pb-4 text-center self-center">
            <Button
              type='submit'
              bgColor="Primary"
              disabled={errorsList[0] ? true : false}
            />
          </div>
        </form>
        <NotificationSendForm/>
      </div>
    </>
  );
}
