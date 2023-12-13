'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import PartnerMembershipTitle from './PartnerMembershipTitle';
import { PartnerMembershipFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialPartnerMembershipFormData } from '../../initials/initObjects';
import { submitPartnerMembershipForm } from '../../pages/api/partner-membership';

import { useSubmit } from '../../providers/StateProvider';
import CountryInput from '../common/form/CountryInput';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
// import ButtonRefactor from '../common/ButtonRefactor';
import { useTranslation } from 'app/i18n/client';
import Button from '../common/Button';
import { useLang } from 'store';

// import { PartnerMembership } from '@prisma/client';

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
    lang
  } = useLang((s) => s)

  const { t } = useTranslation(lang, "formComponent");

  useEffect(() => {
    async function fetchCsrfToken() {
      console.log('csrfToken', process.env.NEXT_PUBLIC_DJANGO_HOST_URL);
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

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
    <div>
      <div>
        <div className="container m-[-1rem] mx-auto bg-[#faf8f5] px-5 font-barlow dark:bg-transparent lg:p-20">
          <PartnerMembershipTitle />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              <PersonalInfoInput
                register={register}
                errors={errors}
                nameInputs={{
                  firstName: 'firstName',
                  lastName: 'lastName',
                  email: 'email',
                  phoneNumber: ''
                }}
              />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label={t('birthDate')}
                required={t('birthDateRequired')}
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage={t('birthDateErrorMessage')}
                placeholder={t('birthDatePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-2 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

              <CountryInput
                register={register}
                errors={errors}
                nameInput="countryOfResidence"
                lang={lang}
              />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label={t('birthDate')}
                required={t('birthDateRequired')}
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage={t('birthDateErrorMessage')}
                placeholder={t('birthDatePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-2 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

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
                nameInput="investmentCeiling"
                type="text"
                label={t('investmentCeiling')}
                required={t('investmentCeilingRequired')} 
                placeholder={t('investmentCeilingPlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
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
            <div className="text-center">
              <Button
                type='submit'
                bgColor="Primary"
                disabled={errorsList[0] ? true : false}
              />
            </div>
          </form>
          <NotificationSendForm />
        </div>
      </div>
    </div>
  );
}
