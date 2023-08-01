// 'use client'
// import React from 'react';
// import Input from '../base/Input';
// import { useForm } from 'react-hook-form';

// export default function InvestorRegistrationForm() {

//   function YourFormComponent() {
//     // Use useForm() to get form methods and state from the parent form
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     // Define a function to handle form submission
//     const onSubmit = (data: any) => {
//       // Handle form submission here
//       console.log(data);
//     }
//   return (
//     <>
//       <div className="container p-20 mx-auto bg-[#faf8f5]">
//         <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Use the Input component */}
//       <Input
//         register={register}
//         errors={errors}
//         nameInput="yourFieldName" // Provide a unique name for each input field
//         type="text" // Specify the input type (e.g., text, email, password)
//         label="Your Label" // Specify the label for the input field
//         required="This field is required." // Specify the required error message
//         patternValue="^[A-Za-z]+$" // Specify the regular expression pattern (without slashes)
//         patternMessage="Only alphabetic characters are allowed." // Specify the pattern error message
//         placeholder="Enter your text" // Specify the placeholder text for the input field
//         className="w-full input input-bordered drop-shadow-lg" // Specify the CSS class for the input element
//         labelClass="your-label-styles" // Specify the CSS class for the label element
//       />

//       {/* Add other input fields and submit button */}

//       <button type="submit">Submit</button>
//     </form>
//         </div>
//       </div>
//     </>
//   );
// }}

'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../base/Input';

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission data here
  };

  return (
    <>
      <div className="container p-20 mx-auto bg-[#faf8f5]">
        <form
          className="grid gap-6 my-6 md:grid-cols-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            register={register}
            errors={errors}
            nameInput="firstName"
            type="text"
            label="First Name"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your first name"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="my-5"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="lastName"
            type="text"
            label="Last Name"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your last name"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="birthTime"
            type="text"
            label="Birth Time"
            required="This field is required."
            patternValue="^\d{4}-\d{2}-\d{2}$"
            patternMessage="Please enter a valid birth time (e.g., 10:30 AM)"
            placeholder="Enter your birth time"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="countryOfResidence"
            type="text"
            label="Country of Residence"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your country of residence"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="provinceOfResidence"
            type="text"
            label="Province of Residence"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your province of residence"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="streetAddress"
            type="text"
            label="Street Address"
            required="This field is required."
            placeholder="Enter your street address"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="streetAddressLine2"
            type="text"
            label="Street Address Line 2"
            placeholder="Enter additional address details"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            required={''}
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="postalCode"
            type="text"
            label="Postal/Zip Code"
            required="This field is required."
            placeholder="Enter your postal or zip code"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="companyName"
            type="text"
            label="Company Name"
            required="This field is required."
            placeholder="Enter your company name"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="investmentCeiling"
            type="number"
            label="Investment Ceiling"
            required="This field is required."
            placeholder="Enter your investment ceiling"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="positionInTeam"
            type="text"
            label="Your Position in Team"
            required="This field is required."
            placeholder="Enter your position in the team"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="preferredAreas"
            type="text"
            label="Preferred Areas for Investment"
            required="This field is required."
            placeholder="Enter your preferred areas for investment"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="howDidYouKnowUs"
            type="text"
            label="How Did You Get to Know Us?"
            required="This field is required."
            placeholder="Enter how you found out about us"
            className="w-full input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
