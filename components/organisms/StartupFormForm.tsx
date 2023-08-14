'use client';
import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import Input from './base/Input';
import Select from './base/Select';
import InvestorRegistrationTitle from 'app/types/global';
import { startupsFormData } from '../../app/types/global';
import StartupFormTitle from '../atoms/StartupFormTitle';
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormTrialProduct from './StartupFormTrialProduct';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';
import NoRadioButton from '../atoms/NoRadioButton';


export default function StartupFormForm() {

  const initialStartupsFormData: startupsFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    type: '',
    ideaExplanation: '',
    getToKnowUs: '',
    pitchDeck: true,
    pitchDeckFile: null as File | null,
    businessPlan: true,
    businessPlanFile: null as File | null,
    productName: '',
    siteAddress: '',
    customerProblem: '',
    solution: '',
    productLevel: '',
    scalable: '',
    monetizationOfYourPlan: '',
    structureOfYourSales: '',
    financialModelFile: null as File | null,
    cooperatedWithInvestors: '',
    financial: true,
    financialFile: null as File | null,
    customerCharacteristic: '',
    currentCustomers: '',
    estimatedMarketSize: '',
    totalTamSamSom: '',
    startupRevenue: '',
    monthlyIncome: '',
    currentInterestRate: '',
    currentRaisedFunding: '',
    neededCapital: '',
    MVP:false,
    FirstSale:false,
    TrialProduct:false,
    SaleDevelopment:false,
    Idea:false,
  };
  





  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<startupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData,
  });

  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };
  const [filePost, setFilePost] = useState<{ businessPlanFile: File | null }>({
    businessPlanFile: null,
  });
  const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | null }>({
    pitchDeckFile: null,
  });
  const [filePost3, setFilePost3] = useState<{ financialFile: File | null }>({
    financialFile: null,
  });


  const handlePitchDeckFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const pitchDeckFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setFilePost2({ pitchDeckFile: event.target.files[0] });
    }
  };

  const handleBusinessPlanFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFilePost({ businessPlanFile: event.target.files[0] });
    }
    
    // const businessPlanFile = event.target.files && event.target.files[0];
    // setFilePost({businessPlanFile: event.target.files[0]})
  };
const [formData, setFormData] = useState<startupsFormData>(initialStartupsFormData);

const onSubmit = async (formData: startupsFormData) => {


  const sendFormData = new FormData()
  // TODO: fix this condition for other field
  if (filePost.businessPlanFile) {
    sendFormData.append('businessPlanFile', filePost.businessPlanFile, filePost.businessPlanFile.name);
  }
  if(filePost2.pitchDeckFile){
    sendFormData.append('pitchDeckFile',filePost2.pitchDeckFile,filePost2.pitchDeckFile.name);
  }

  sendFormData.append('firstName', formData.firstName);
  sendFormData.append('lastName', formData.lastName);
  sendFormData.append('email', formData.email);
  sendFormData.append('countryOfResidence', formData.countryOfResidence);
  sendFormData.append('provinceOfResidence', formData.provinceOfResidence);
  sendFormData.append('type', formData.type);
  sendFormData.append('birthDate', String(formData.birthDate));
  sendFormData.append('ideaExplanation', formData.ideaExplanation);
  sendFormData.append('getToKnowUs', formData.getToKnowUs);
  sendFormData.append('pitchDeck', String(formData.pitchDeck));
  sendFormData.append('pitchDeckFile', formData.pitchDeckFile as Blob);
  sendFormData.append('businessPlan', String(formData.businessPlan));
  sendFormData.append('businessPlanFile', formData.businessPlanFile as Blob);
  sendFormData.append('productName', formData.productName);
  sendFormData.append('siteAddress', formData.siteAddress);
  sendFormData.append('customerProblem', formData.customerProblem);
  sendFormData.append('solution', formData.solution);
  sendFormData.append('productLevel', formData.productLevel);
  sendFormData.append('scalable', formData.scalable);
  sendFormData.append(
    'monetizationOfYourPlan',
    formData.monetizationOfYourPlan
  );
  sendFormData.append('structureOfYourSales', formData.structureOfYourSales);
  sendFormData.append(
    'financialModelFile',
    formData.financialModelFile as Blob
  );
  sendFormData.append(
    'cooperatedWithInvestors',
    formData.cooperatedWithInvestors
  );
  sendFormData.append('financial', String(formData.financial));
  sendFormData.append('financialFile', formData.financialFile as Blob);
  sendFormData.append(
    'customerCharacteristic',
    formData.customerCharacteristic
  );
  sendFormData.append('currentCustomers', formData.currentCustomers);
  sendFormData.append('estimatedMarketSize', formData.estimatedMarketSize);
  sendFormData.append('totalTamSamSom', formData.totalTamSamSom);
  sendFormData.append('startupRevenue', formData.startupRevenue);
  sendFormData.append('monthlyIncome', formData.monthlyIncome);
  sendFormData.append('currentInterestRate', formData.currentInterestRate);
  sendFormData.append('currentRaisedFunding', formData.currentRaisedFunding);
  sendFormData.append('neededCapital', formData.neededCapital);
  try {
    const response = await fetch('/api/upload-startups-form', {
      method: 'POST',
      body: sendFormData,
    });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

    // setIsSuccess(true);
    // setSend(false);
    reset(initialStartupsFormData); // Reset the form after successful submission
    console.log('Form data sent successfully!');
  } catch (error) {
    // setSend(false);
    // setIsSuccess(false);
    console.error('Error sending form data:', error);
  }
};

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  return (
    <>
      <div className="container m-10 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <StartupFormTitle />
        <div>
          <p className="text-4xl mb-4">Personal information</p>
        </div>
        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation register={register} errors={errors} />

          <div>
            <p className="text-4xl mb-4">Grows and Scale Up</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>
            {/* idea section */}
            <label className="flex flex-column mr-10 my-10">
            <input
              type="radio"
              value="ideaExplanation"
              {...register('ideaExplanation')}
              className="radio mr-2 text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]"
              checked={selectedRadio === 'ideaExplanation'}
              onChange={handleRadioChange}
            />
            <span>Idea</span>
          </label>
            {(() => {
            if (selectedRadio == "ideaExplanation") {
              return <StartupFormIdea register={register} errors={errors} />;
            }
            else{
              return <div></div>;
            }
            })()}

{/* MVP section */}
<label className="flex flex-column mr-10 my-10">
            <input
              type="radio"
              value="MVP"
              {...register('MVP')}
              className="radio mr-2 text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]"
              checked={selectedRadio === 'MVP'}
              onChange={handleRadioChange}
            />
            <span>Minimal Valuable Product</span>
          </label>
            {(() => {
            if (selectedRadio == "MVP") {
              return <StartupFormMVP register={register} errors={errors} handleBusinessPlanFileChange={handleBusinessPlanFileChange} handlePitchDeckFileChange={handlePitchDeckFileChange}/>;
            }else{
              return <div></div>;
            }
            })()}

<label className="flex flex-column mr-10 my-10">
            <input
              type="radio"
              value="TrialProduct"
              {...register('TrialProduct')}
              className="radio mr-2 text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]"
              checked={selectedRadio === 'TrialProduct'}
              onChange={handleRadioChange}
            />
            <span>Trial Product</span>
          </label>
            {(() => {
            if (selectedRadio == "TrialProduct") {
              return <StartupFormTrialProduct register={register} errors={errors}/>;
            }else{
              return <div></div>;
            }
            })()}


<label className="flex flex-column mr-10 my-10">
            <input
              type="radio"
              value="FirstSale"
              {...register('FirstSale')}
              className="radio mr-2 text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]"
              checked={selectedRadio === 'FirstSale'}
              onChange={handleRadioChange}
            />
            <span>First Sale</span>
          </label>
            {(() => {
            if (selectedRadio == "FirstSale") {
              return <StartupFormFirstSale register={register} errors={errors}/>;
            }else{
              return <div></div>;
            }
            })()}


          <label className="flex flex-column mr-10 my-10">
            <input
              type="radio"
              value="SaleDevelopment"
              {...register('SaleDevelopment')}
              className="radio mr-2 text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]"
              checked={selectedRadio === 'SaleDevelopment'}
              onChange={handleRadioChange}
            />
            <span>Sale Development</span>
          </label>
            {(() => {
            if (selectedRadio == "SaleDevelopment") {
              return <StartupFormSaleDevelopment register={register} errors={errors}/>;
            }else{
              return <div></div>;
            }
            })()}
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

{
  /* <Input
              register={register}
              errors={errors}
              nameInput="streetAddress"
              type="text"
              label="Street Address"
              required="Street Address is Required."
              placeholder="Enter your Street Address"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="streetAddressLine2"
              type="text"
              label="Street Address Line 2"
              placeholder="Enter Additional Address Details"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              required="Postal/Zip Code is Required."
              placeholder="Enter your Postal or Zip Code"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="companyName"
              type="text"
              label="Company Name"
              required="Company Name is Required."
              placeholder="Enter your Company Name"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
            />

            <Input
              register={register}
              errors={errors}
              nameInput="investmentCeiling"
              type="text"
              label="Investment Ceiling"
              required="Investment Ceiling is Required."
              placeholder="Enter your Investment Ceiling"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="positionInTeam"
              type="text"
              label="Your Position in Team"
              required="Position in Team is Required."
              placeholder="Enter your Position in Team"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              patternValue={''}
              patternMessage={''}
            />
              <Select
                register={register}
                errors={errors}
                nameInput="preferredAreas"
                label="Preferred Areas for Investment"
                placeholder="Select your Position in Team"
                required="Preferred Areas is Required."
                options={test}
                className=" w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
              <Select
                register={register}
                errors={errors}
                nameInput="howDidYouKnowUs"
                label="How did You Get to Know Us?"
                placeholder="Select How did You Get to Know Us?"
                required="This field is Required."
                options={test}
                className=" w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              /> */
}
