'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InvestorRegistrationFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialInvestorRegistrationFormData } from '../../initials/initObjects';
import { submitInvestorRegistrationForm } from '../../pages/api/investor-registration';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '../common/ButtonRefactor';
// import Select from '@/components/common/form/Select';

export default function InvestorRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InvestorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialInvestorRegistrationFormData
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

  const { t } = useTranslation(lang, 'formComponent');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: InvestorRegistrationFormData) => {
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
    submitInvestorRegistrationForm(sendFormData, csrfToken)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData);

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
      <div className="container m-[-1rem] mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className='w-full h-auto pt-8 bg-[#F8F5F0]'>
            <div className='w-full h-auto flex flex-col gap-12'>
              <div className='w-full h-auto flex flex-row justify-center'>
                <p className='text-black font-gilda font-medium text-[64px] leading-[75px]'>{t('investorForm', { returnObjects: true }).formTitle}</p>
              </div>
              <div className='w-full h-auto flex flex-row justify-start px-6'>
                <p className='text-black font-barlow font-medium text-[30px] leading-[42px]'>{t('PersonalInformation')}</p>
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

            <div className="col-span-1 md:col-span-3">
              <div className="">
                <TextArea
                  title={
                    t('investorForm', { returnObjects: true }).preferredAreas
                  }
                  register={register}
                  errors={errors}
                  placeholder={
                    t('investorForm', { returnObjects: true })
                      .preferredAreasPlaceholder
                  }
                  nameTextArea="preferredAreas"
                  patternMessage=""
                  patternValue=""
                  required=""
                />
              </div>

              <div className="">
                <TextArea
                  title={t('howDidYouKnowUs')}
                  register={register}
                  errors={errors}
                  placeholder={t('howDidYouKnowUsPlaceholder')}
                  nameTextArea="howDidYouKnowUs"
                  patternMessage=""
                  patternValue=""
                  required=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto w-full pb-4 md:w-auto">
            <ButtonRefactor type="submit" text={t('sendButton')} disabled={errorsList[0] ? true : false}/>
          </div>
        </form>
        <NotificationSendForm />
      </div>
    </>
  );
}
