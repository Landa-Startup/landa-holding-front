'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { Entrepreuneur } from '../../types/global';
import EntrepreneursTitle from './EntrepreneursTitle';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialFormData } from '../../initials/initObjects';
import Button from '../common/Button';
import { submitEntrepreneurForm } from '../../pages/api/entrepreneurs';
import { useSubmit } from '../../providers/StateProvider';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

export default function EntrepreneursForm(
  {lang} : {lang: string}
) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData,
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
      const token = await GetCsrfToken("https://panel.landaholding.com/get-csrf-token");
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
    submitEntrepreneurForm(sendFormData, csrfToken).then((response) => {

      console.log(response);

      handleChangeSuccess();
      reset(initialFormData); // country does not reset
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch(() => {
      handleChangeReject();
      reset(initialFormData);
  
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }))

  return (
    <>
      <div className="container m-16 mx-auto bg-[#faf8f5] p-20 font-barlow dark:bg-transparent" dir={lang === "en" ? "ltr" : "rtl"}>
        <EntrepreneursTitle lang={lang} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label={lang === "en" ? "Company Name" : "نام شرکت"}
                required={lang === "en" ? "Company Name is Required." : "نام شرکت الزامی است"}
                patternValue=""
                patternMessage=""
                placeholder={lang === "en" ? "Enter your Company Name" : "نام شرکت خود را وارد کنید"}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: "",
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
                nameInput="website"
                type="text"
                label={lang === "en" ? "Website" : "نام وب سایت"}
                required={lang === "en" ? "Website is Required." : "نام وب سایت الزامی است"}
                placeholder={lang === "en" ? "Enter your Website" : "نام وب سایت خود را وارد کنید"}
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
                label={lang === "en" ? "Field Of Professional" : "حوزه تخصص"}
                required={lang === "en" ? "Field Of Professional is Required." : "حوزه تخصص الزامی است"}
                placeholder={lang === "en" ? "Enter your Field Of Professional" : "حوزه تخصص خود را وارد کنید"}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
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
        <NotificationSendForm/>
      </div>
    </>
  );
}
