'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
enum Type {
  IDEA='IDEA',
  MVP='MVP',
  TRIAL='TRIAL',
  FisrtScale='FisrtScale',
  SaleDevelopment='SaleDevelopment',
}

enum Level {
  basicPrinciple='basicPrinciple',
  technologyConcept='technologyConcept',
  exprimentalProof='exprimentalProof',
  confirmedTechnologyLab='confirmedTechnologyLab',
  confirmedTechnologyEnv='confirmedTechnologyEnv',
  presentedTechnologyEnv='presentedTechnologyEnv',
  systemPrototypeInMvp='systemPrototypeInMvp',
  realisticSystem='realisticSystem',
  qualifiedSystem='qualifiedSystem',
}

interface FormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  type: Type;
  ideaExplanation: string;
  getToKnowUs: string;
  pitchDeck: boolean;
  pitchDeckFile: File | null;
  businessPlan: boolean;
  businessPlanFile: File | null;
  productName: string;
  siteAddress: string;
  customerProblem: string;
  solution: string;
  productLevel: Level;
  scalable: string;
  monetizationOfYourPlan: string;
  structureOfYourSales: string;
  financialModel: string;
  cooperatedWithInvestors: string;
  financial: boolean;
}

const StartupForm = () => {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    type: Type.IDEA,
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
    productLevel: Level.basicPrinciple,
    scalable: '',
    monetizationOfYourPlan: '',
    structureOfYourSales: '',
    financialModel: '',
    cooperatedWithInvestors: '',
    financial: true,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });

  const [showForm, setShowForm] = useState(false);

  const handleRadioChange = (e: any) => {
    setShowForm(e.target.value === 'idea' || e.target.value === 'mvp');
  };

  const [send, setSend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [filePost, setFilePost] = useState<{ pitch: File | null }>({
    pitch: null,
  });
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'pitch') {
      if (e.target.files && e.target.files.length > 0) {
        setFilePost({ pitch: e.target.files[0] });
      }
      console.log(e.target.files);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSend(true);

    
    const sendFormData = new FormData();

    // TODO: fix this condition for other field
    if (filePost.pitch) {
      sendFormData.append('pitch', filePost.pitch, filePost.pitch.name);
    }


    sendFormData.append('fullName', formData.firstName);
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
    sendFormData.append('monetizationOfYourPlan', formData.monetizationOfYourPlan);
    sendFormData.append('structureOfYourSales', formData.structureOfYourSales);
    sendFormData.append('financialModel', formData.financialModel);
    sendFormData.append('cooperatedWithInvestors', formData.cooperatedWithInvestors)
    sendFormData.append('financial', String(formData.financial))


    try {
      const response = await fetch("/api/upload-form", {
        method: "POST",
        body: sendFormData
    });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSuccess(true);
      setSend(false);
      reset(initialFormData); // Reset the form after successful submission
      console.log('Form data sent successfully!');
    } catch (error) {
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center mx-40 bg-whiteGold p-14">
      <div className="w-[559px] h-[186px] flex flex-col items-center mx-auto">
        <div className="text-black text-[64px] font-normal">STARTUPS FORM</div>
        <div className="text-center text-black text-[32px] font-normal">
          Let’s Talk About Your Project
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="text-black text-[35px] font-normal">
            Personal Informations
          </div>
          <div className="divide-y-2"></div>
        </div>

        <div className="grid grid-cols-3">
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">
                First Name
              </span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="First Name"
            ></input>
          </div>
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">
                Last Name
              </span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="First Name"
            ></input>
          </div>
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">Birthday</span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="First Name"
            ></input>
          </div>
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">Email</span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="Email"
              type="email"
            ></input>
          </div>
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">
                Country of Residence
              </span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="Country"
            ></input>
          </div>
          <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="h-[17px]">
              <span className="text-black text-base font-normal">
                Province of Residence
              </span>
              <span className="text-stone-500 text-base font-normal">*</span>
            </div>
            <input
              className="w-[275px] h-[31px] relative bg-stone-100 shadow"
              placeholder="Province"
            ></input>
          </div>
        </div>

        <div>
          <div className="text-black text-[35px] font-normal">
            Grows and Scale Up
          </div>
          <div className="divide-y-2"></div>
        </div>

        {/* Radio buttons */}
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="idea"
            name="projectStage"
            value="idea"
            onChange={handleRadioChange}
            className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
          />
          <label htmlFor="idea" className="text-lg font-medium">
            Idea
          </label>
        </div>
        {/* Form with text areas */}
        {showForm && (
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="explainIdea" className="text-lg font-medium">
                Explain your idea in 5 lines?*
              </label>
              <textarea
                id="explainIdea"
                className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
                placeholder="Your idea..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="howDidYouKnowUs" className="text-lg font-medium">
                How did you get to know us?*
              </label>
              <textarea
                id="howDidYouKnowUs"
                className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
                placeholder="Your answer..."
              ></textarea>
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="mvp"
            name="projectStage"
            value="mvp"
            onChange={handleRadioChange}
            className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
          />
          <label htmlFor="mvp" className="text-lg font-medium">
            Minimal Valuable Product
          </label>
        </div>
        {/* Form for Minimal Valuable Product */}
        <div className="w-1/2">
          <div className="flex space-x-3">
            <div className="flex flex-col">
              <div className="text-lg font-medium">
                Do you have Pitch deck?*
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="pitchDeckYes"
                  name="pitchDeckOption"
                  value="yes"
                  className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
                />
                <label htmlFor="pitchDeckYes" className="text-lg font-medium">
                  Yes
                </label>
                <input
                  type="radio"
                  id="pitchDeckNo"
                  name="pitchDeckOption"
                  value="no"
                  className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
                />
                <label htmlFor="pitchDeckNo" className="text-lg font-medium">
                  No
                </label>
              </div>
              <input type="file" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">
                Do you have Pitch deck?*
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="pitchDeckYes"
                  name="pitchDeckOption"
                  value="yes"
                  className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
                />
                <label htmlFor="pitchDeckYes" className="text-lg font-medium">
                  Yes
                </label>
                <input
                  type="radio"
                  id="pitchDeckNo"
                  name="pitchDeckOption"
                  value="no"
                  className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
                />
                <label htmlFor="pitchDeckNo" className="text-lg font-medium">
                  No
                </label>
              </div>

              <input type="file" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="h-[17px]">
                <span className="text-black text-base font-normal">
                  Product Name
                </span>
                <span className="text-stone-500 text-base font-normal">*</span>
              </div>
              <input
                className="h-[31px] relative bg-stone-100 shadow"
                placeholder="Product"
              ></input>
            </div>
            <div className="h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="h-[17px]">
                <span className="text-black text-base font-normal">
                  Site Address
                </span>
                <span className="text-stone-500 text-base font-normal">*</span>
              </div>
              <input
                className="h-[31px] relative bg-stone-100 shadow"
                placeholder="Product"
              ></input>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <span className="text-black">Problems</span>
          <div className="mt-4">
            <label className="text-lg font-medium">
              Describe the customer problem you want to solve with your product
              or service.*
            </label>
            <textarea
              className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
              placeholder="Your description..."
            />
          </div>
        </div>
        <div className="w-1/2">
          <span className="text-black">Solutions</span>
          <div className="mt-4">
            <label className="text-lg font-medium">
              Describe the customer problem you want to solve with your product
              or service.*
            </label>
            <textarea
              className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
              placeholder="Your description..."
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mt-4">
            <label className="text-lg font-medium">
              What is your unique value proposition (innovation)? What is new
              about what you do?*
            </label>
            <textarea
              className="w-full h-24 p-2 border-2 border-stone-100 rounded-lg focus:outline-none focus:border-gold"
              placeholder="Your description..."
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-lg font-medium">
            How much is the level of your product and technology preparation?
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                The basic principle has been observed
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                Experimental proof of concept.
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                The confirmed technology in laboratory.
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                The confirmed technology in the environmental conditions
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                The presented technology in the environmental conditions
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                Show the system prototype in the mvp operating environment.
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                The proved realistic system in the operating environment.
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="basicPrinciple"
                name="technologyLevel"
                value="basicPrinciple"
                className="w-5 h-5 text-gold border-2 border-gold rounded-full focus:outline-none focus:border-gold"
              />
              <label htmlFor="basicPrinciple" className="text-lg">
                A complete and qualified system.
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StartupForm;
