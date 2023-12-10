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
import ButtonRefactor from '../common/ButtonRefactor';

// import { PartnerMembership } from '@prisma/client';

export default function PartnerMembershipForm(
  { lang }: { lang: string }
) {

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
    handleChangeSuccess,
    handleChangeReject
  } = useSubmit();

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
        handleChangeSuccess();
        reset(initialPartnerMembershipFormData); // Country does not reset

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleChangeReject();
        reset(initialPartnerMembershipFormData);
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }));

  return (
    <div>
      <div>
        <div className="container m-[-1rem] mx-auto bg-[#faf8f5] px-5 font-barlow dark:bg-transparent lg:p-20">
          <PartnerMembershipTitle lang={lang} />
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
                lang={lang}
              />

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="birthDate"
                  type="date"
                  label={lang === 'en' ? 'Date of Birth' : 'تاریخ تولد'}
                  required={
                    lang === 'en'
                      ? 'Date of Birth is Required.'
                      : 'تاریخ تولد الزامی است'
                  }
                  patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                  patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
                  placeholder={
                    lang === 'en'
                      ? 'Enter your Date of Birth'
                      : 'تاریخ تولد خود را وارد کنید'
                  }
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
                  nameInput="companyName"
                  type="text"
                  label={lang === 'en' ? 'Company Name' : 'نام شرکت'}
                  required={
                    lang === 'en'
                      ? 'Company Name is Required.'
                      : 'نام شرکت الزامی است'
                  }
                  placeholder={
                    lang === 'en'
                      ? 'Enter your Company Name'
                      : 'نام شرکت خود را وارد کنید'
                  }
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
                  label={
                    lang === 'en' ? 'Investment Ceiling' : 'سقف سرمایه گذاری'
                  }
                  required={
                    lang === 'en'
                      ? 'Investment Ceiling is Required.'
                      : 'سقف سرمایه گذاری الزامی است'
                  }
                  placeholder={
                    lang === 'en'
                      ? 'Enter your Investment Ceiling'
                      : 'سقف سرمایه گذاری خود را وارد کنید'
                  }
                  className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                  labelClass="text-[#6b6b6b] dark:text-current"
                  patternValue={''}
                  patternMessage={''}
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <TextArea
                  title={
                    lang === 'en'
                      ? 'How did you hear about us?*'
                      : 'چگونه درباره ما شنیدید'
                  }
                  register={register}
                  errors={errors}
                  placeholder={lang === 'en' ? 'Description' : 'توضیحات'}
                  nameTextArea="howDidYouKnowUs"
                  patternMessage=""
                  patternValue=""
                  required={
                    lang === 'en'
                      ? 'This field is required'
                      : 'پر کردن این قسمت الزامی است'
                  }
                />
              </div>
            </div>
            <div className="text-center">
              {/* <Button
              type='submit'
              bgColor="Primary"
              disabled={errorsList[0] ? true : false}
              lang={lang}
            />
          </div>
        </form>
        <NotificationSendForm lang={lang}/>
      </div>
    </div>
    </div>
  );
}
