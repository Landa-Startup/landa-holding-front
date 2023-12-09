'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UploadInput from '../common/UploadInput';
import { JobFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../..//utils/get-csrf-token';
import { initialJobFormData } from '../../initials/initObjects';
import { submitApplyJobForm } from '../../pages/api/jobs';

import { useSubmit } from '../../providers/StateProvider';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import ButtonRefactor from '../common/ButtonRefactor';

export default function JobForm({ lang }: { lang: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<JobFormData>({
    mode: 'onBlur',
    defaultValues: initialJobFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleChangeSuccess,
    handleChangeReject,
    cvFileState,
    handleCvFileChange
  } = useSubmit();

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }
    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: JobFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    const filePostMap = {
      cvFile: cvFileState.cvFile
    };

    for (const [fieldName, file] of Object.entries(filePostMap)) {
      if (file) {
        sendFormData.append(fieldName, file, file.name);
      }
    }

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      } else sendFormData.append(fieldName, fieldValue[0]);
    });

    // Send the form data to the API.
    submitApplyJobForm(sendFormData, csrfToken)
      .then((response) => {
        handleChangeSuccess();
        reset(initialJobFormData); // Country does not reset

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch((error) => {
        handleChangeReject();

        console.log(error);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }))

  return (
    <>
      <div className="container m-16 mx-auto bg-[#faf8f5] px-5 dark:bg-transparent lg:p-20">
        <>
          <div className="container m-[-9rem] mx-auto bg-[#faf8f5] px-5 dark:bg-transparent lg:p-20">
            <>
              <div className="text-center">
                <p className="mb-20 font-serif text-2xl tracking-wide">
                  {lang === 'en' ? 'Apply job Form' : 'فرم درخواست همکاری'}
                </p>
              </div>
              <div>
                <p className="mb-4 text-4xl">
                  {lang === 'en' ? 'Personal Information' : 'اطلاعات شخصی'}
                </p>
              </div>
              <div>
                <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
              </div>
            </>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                <PersonalInfoInput
                  register={register}
                  errors={errors}
                  nameInputs={{
                    firstName: 'firstName',
                    lastName: 'lastName',
                    email: 'email',
                    phoneNumber: 'phoneNumber'
                  }}
                  lang={lang}
                />

                <UploadInput
                  title={lang === 'en' ? 'CV File:' : 'فایل رزومه:'}
                  register={register}
                  errors={errors}
                  handleChange={handleCvFileChange}
                  nameInput="cvFile"
                />
              </div>
              <div className="text-center">
                {/* <Button
                  type='submit'
                  bgColor="Primary"
                  disabled={errorsList[0] ? true : false}
                  lang={lang}
                /> */}
                <ButtonRefactor type="submit" text="Submit" />
              </div>
            </form>
            <NotificationSendForm />
          </div>
        </>
      </div>
    </>
  );
}
