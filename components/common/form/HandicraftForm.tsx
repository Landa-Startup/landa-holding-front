// import React, { useEffect } from 'react';
// import { PersonalInfoInput } from './PersonalInfoInput';
// import { useSubmit } from 'providers/StateProvider';
// import GetCsrfToken from '@/utils/get-csrf-token';
// import { useForm } from 'react-hook-form';
// import { HandicraftFormData } from 'initials/initObjects';

import ButtonRefactor from '../ButtonRefactor';

// import { HandicraftForm, HandicraftForm } from '@/types/global';
export default function HandicraftForm() {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset
  //   } = useForm<HandicraftFormData>({
  //     mode: 'onBlur',
  //     defaultValues: HandicraftFormData
  //   });

  //   const {
  //     csrfToken,
  //     handleTokenChange,
  //     handleSubmitingChange,
  //     handleSendChange,
  //     handleNotifChange,
  //     handleChangeSuccess,
  //     handleChangeReject
  //   } = useSubmit();

  //   useEffect(() => {
  //     async function fetchCsrfToken() {
  //       const token = await GetCsrfToken(
  //         `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //       );
  //       handleTokenChange(token);
  //     }

  //     fetchCsrfToken();
  //   }, []);

  //   const onSubmit = async (formData: HandicraftForm) => {
  //     // Set loading and sending states.
  //     handleSubmitingChange(true);
  //     handleSendChange(true);

  //     // Create a FormData object for form data.
  //     const sendFormData = new FormData();

  //     // Append all non-file form fields.
  //     Object.entries(formData).forEach(([fieldName, fieldValue]) => {
  //       if (typeof fieldValue !== 'object' || fieldValue === null) {
  //         sendFormData.append(fieldName, String(fieldValue));
  //       }
  //     });

  //     // Send the form data to the API.
  //     submitContactForm(sendFormData, csrfToken)
  //       .then((response) => {
  //         console.log(response);

  //         handleChangeSuccess();
  //         reset(ContactFormData); // Reset the form after successful submission
  //         setTimeout(() => {
  //           handleNotifChange(false);
  //         }, 10000); // 10 seconds in milliseconds
  //       })
  //       .catch(() => {
  //         handleChangeReject();
  //         reset(ContactFormData);

  //         setTimeout(() => {
  //           handleNotifChange(false);
  //         }, 10000); // 10 seconds in milliseconds
  //       });
  //   };

  //   // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   //   name: name,
  //   //   value: value
  //   // }));
  return (
    // <form className="flex flex-col gap-4">
    //   <PersonalInfoInput
    //     lang={lang}
    //     errors={''}
    //     register={''}
    //     nameInputs={{
    //       firstName: 'First Name',
    //       lastName: 'Last Name',
    //       email: 'Email',
    //       phoneNumber: ''
    //     }}
    //   />
    // </form>
    <form className="grid grid-cols-2 justify-items-center gap-4 md:w-1/2">
      <input
        className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder="First Name"
      ></input>
      <input
        className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder="Last Name"
      ></input>
      <input
        className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder="Email"
      ></input>
      <input
        className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder="Organization"
      ></input>
      <div className='col-span-2'>
      <ButtonRefactor text="Submit" type="submit"/>
      </div>
    </form>
  );
}
