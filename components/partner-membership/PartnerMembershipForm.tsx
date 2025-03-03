'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { PartnerMembershipFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialPartnerMembershipFormData } from '../../initials/initObjects';
import { submitPartnerMembershipForm } from '../../pages/api/partner-membership';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '../common/ButtonRefactor';


export default function PartnerMembershipForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PartnerMembershipFormData>({
    mode: 'onBlur',
    defaultValues: initialPartnerMembershipFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
  } = useSubmit((s) => s )

  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, "formComponent");

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: PartnerMembershipFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitPartnerMembershipForm(sendFormData, csrfToken)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialPartnerMembershipFormData); // Country does not reset

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialPartnerMembershipFormData);
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  return (
    <div>
      <div>
        <div className="container  m-[-1rem] mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20">
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <div className='w-full h-auto pt-8 bg-[#F8F5F0]'>
              <div className='w-full h-auto flex flex-col gap-12'>
                <div className='w-full h-auto flex flex-row justify-center'>
                  <p className='text-black font-gilda font-medium text-[64px] leading-[75px]'>{t('partnerForm', { returnObjects: true }).formTitle}</p>
                </div>
                <div className='w-full h-auto flex flex-row justify-start px-6'>
                  <p className='text-black font-barlow font-medium text-[30px] leading-[42px]'>Personal Information</p>
                </div>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
              <PersonalInfoInput
                register={register}
                errors={errors}
                nameInputs={{
                  firstName: 'firstName',
                  lastName: 'lastName',
                  email: 'email',
                  phoneNumber: 'phoneNumber',
                  jobPosition: ''
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
                className="input input-bordered col-span-1 mb-1 mt-3 bg-whiteGold w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="investmentCeiling"
                type="text"
                label={t('startUp', {returnObjects: true}).investmentCeiling}
                required={t('startUp', {returnObjects: true}).investmentCeilingRequired} 
                placeholder={t('startUp', {returnObjects: true}).investmentCeilingPlaceholder}
                className="input input-bordered col-span-1 mb-1 mt-3 bg-whiteGold w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title={t('howDidYouKnowUs')}
                register={register}
                errors={errors}
                placeholder={t('howDidYouKnowUsPlaceholder')}
                nameTextArea="howDidYouKnowUs"
                patternMessage=""
                patternValue=""
                required={t('howDidYouKnowUsRequired')}
              />
            </div>
            </div>
            <div className="mx-auto w-full pb-4 text-center md:w-auto">
              {/* <Button
                type='submit'
                bgColor="Primary"
                disabled={errorsList[0] ? true : false}
              /> */}
              <ButtonRefactor text={t('submit')} />
            </div>
          </form>
          <NotificationSendForm />
        </div>
      </div>
    </div>
  );
}