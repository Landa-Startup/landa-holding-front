'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StartupsFormData } from '../../app/types/global';
import { initialStartupsFormData } from '../../app/initials/initObjects'
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import { countryList } from '../../app/[lang]/statics';
import { CountriesDataInterface } from '../../app/types/global'
import Select from '../common/form/Select';
import Button from '../common/Button';

//TODO: add this enum in a file and import it to index.ts api file , global.d file

export default function StartupFormForm() {

  enum Type {
    IDEA = 'IDEA',
    MVP = 'MVP',
    TRIAL = 'TRIAL',
    FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
    SaleDevelopment = 'SaleDevelopment',
  }

  const Types = [
    Type.IDEA,
    Type.MVP,
    Type.TRIAL,
    Type.FisrtSale,
    Type.SaleDevelopment
  ]

  const typesData = Types.map((type: string) => ({
    value : type,
    label : type,
  }))

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData,
  });

  const [selectedRadio, setSelectedRadio] = useState('');

  // useEffect(() => {
  //   setSelectedRadio('IDEA');
  // }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  // TODO: change Send to send(start with small letter)
  const [Send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const [countries, setCountries] = useState(Array<CountriesDataInterface>);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadio(event.target.value);
  };
  const [filePost, setFilePost] = useState<{ businessPlanFile: File | '' }>({
    businessPlanFile: '',
  });
  const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | '' }>({
    pitchDeckFile: '',
  });
  const [filePost3, setFilePost3] = useState<{ financialFile: File | '' }>({
    financialFile: '',
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

  const handleFinancialFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const financialFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setFilePost3({ financialFile: event.target.files[0] });
    }
  };

  const [formData, setFormData] = useState<StartupsFormData>(
    initialStartupsFormData
  );

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  useEffect(() => {
    // const apiUrl = 'https://restcountries.com/v3.1/all';

    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Process the data and set the countries state after sorting
    //     const countryData = data.map((country: any) => ({
    //       value: country.name.common,
    //       text: country.name.common,
    //     }));
    //     countryData.sort((a: any, b: any) => a.text.localeCompare(b.text)); // Sort alphabetically
    //     setCountries(countryData);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });

    const countriesData = countryList.map((country: string) => ({
      value : country,
      text : country,
    }))
    setCountries(countriesData);
  }, []);

  const countriesData = countryList.map((country: string) => ({
    value : country,
    label : country,
  }))

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);

    setFormData({
      ...formData,
      countryOfResidence: event.target.value, // Update the formData state
    });
  };

  const onSubmit = async (formData: StartupsFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();
    // TODO: fix this condition for other field
    if (filePost.businessPlanFile) {
      sendFormData.append(
        'businessPlanFile',
        filePost.businessPlanFile,
        filePost.businessPlanFile.name
      );
    }
    if (filePost2.pitchDeckFile) {
      sendFormData.append(
        'pitchDeckFile',
        filePost2.pitchDeckFile,
        filePost2.pitchDeckFile.name
      );
    }
    if (filePost3.financialFile) {
      sendFormData.append(
        'financialFile',
        filePost3.financialFile,
        filePost3.financialFile.name
      );
    }
    console.log(formData.birthDate);
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
      const response = await apiClient.post('startups-form', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      });

      //       if (!response.ok) {
      //         throw new Error('Network response was not ok');
      //       }

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialStartupsFormData); // Reset the form after successful submission
      setFormData(initialStartupsFormData);
      setSelectedRadio('');
      console.log('Form data sent successfully!');
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      //TODO: remove below code after testing
      console.error('Error sending form data:', error);
      reset(initialStartupsFormData); // Reset the form after successful submission
      setFormData(initialStartupsFormData); // reset states after successful submission
      setSelectedRadio('');
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  console.log(selectedRadio);

  return (
    <>
    <div className="text-center pt-20 bg-[#222] container m-10 px-5 lg:p-2 mx-auto ">   
      <p className="font-serif text-3xl pb-3 pt-0 tracking-wide md:pt-0 md:text-5xl lg:text-6xl lg:pt-10  xl:text-7xl text-white sm:mt-0 ">Startup Validation Form</p>
      <p className="lg:font-serif text-2xl pt-0 pb-10 tracking-wide text-white md:pt-0 md:pb-10 lg:pb-10 ">Your Project</p>
    </div>
      <div className="container m-10 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        {/* <StartupFormTitle /> */}
        <div>
          <p className="mb-4 text-4xl">Personal Information</p>
        </div>

        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            register={register}
            errors={errors}
            selectedCountry={selectedCountry}
            handleCountryChange={handleCountryChange}
            countries={countries}
          />

          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] md:text-3xl lg:w-[450px] xl:w-[650px] lg:text-3xl border-b ">
              Growth and Scale-up
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
          </div>
          </div>
          </div>
          <Select
            register={register}
            errors={errors}
            nameInput='statusSelect'
            label='Select Your Status: '
            required='Your Status is Required'
            className='select select-bordered w-full max-w-xs mt-4'
            labelClass='text-[#6b6b6b] dark:text-current'
            placeholder='Select Your Status'
            options={typesData}
          />
          <br />
          <Select
            register={register}
            errors={errors}
            nameInput='countrySelect'
            label='Select a country: '
            required='Your Country is Required'
            className='select select-bordered w-full max-w-xs mt-4'
            labelClass='text-[#6b6b6b] dark:text-current'
            placeholder='Select a Country'
            options={countriesData}
          />
          {/* idea section */}
          {(() => {
            if (selectedRadio == 'IDEA') {
              return <StartupFormIdea register={register} errors={errors} />;
            } else {
              return <div></div>;
            }
          })()}

          {/* MVP section */}

          {(() => {
            if (selectedRadio == 'MVP') {
              return (
                <StartupFormMVP
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'FisrtSale') {
              return (
                <StartupFormFirstSale
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'SaleDevelopment') {
              return (
                <StartupFormSaleDevelopment
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}
          <div className="text-start mt-10 ml-1">
            <Button
              text={Send ? 'Submitting ....' : 'Submit'}
              type='submit'
              size=''
              addedClass='mt-3 btn btn-wide text-white dark:text-current'
              bgColor="Primary"
              goto=''
              disabled={Boolean(!selectedRadio)}
            />
          </div>
          <NotificationSendForm
            submitting={isSubmitting}
            success={isSuccess}
            sendStatus={Send}
            show={showNotification}
          />
        </form>
      </div>
    </>
  );
}
