'use client'
import UploadFile from 'public/static/logos/UploadFile'
import React, { useState } from 'react'
import Input from '../common/form/Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { useLang } from 'stores/langStore'
import { useTranslation } from 'app/i18n/client'
import ChevDown from 'public/static/logos/ChevDown'
import TextArea from '../common/TextArea'

type Props = {
    handleFileCounterChange: (name: string) => void
    handlePitchFileChange: (file: any) => void
    handleBusinessFileChange: (file: any) => void
    filesCounter: {
        pitch: boolean;
        business: boolean;
        financial: boolean;
    }
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    handleSolutionsLevelChange: (index: number) => void
    solutionsLevel: number
}

const StartUpMvpRefactore = (props: Props) => {

  const {
    handleFileCounterChange,
    handlePitchFileChange,
    handleBusinessFileChange,
    filesCounter,
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange
  } = props;  

  const lang = useLang((s) => s.lang)
  const { t } = useTranslation(lang, 'formComponent');

  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);
  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);
  const [businessOpen, setBusinessOpen] = useState<boolean>(false);
  const startUpData = t('startUp', { returnObjects: true });


  return (
    <div className='w-full h-auto px-4 my-4'>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).trial.pitchDeck}</p>
               </div>
               <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
                 <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
                       <div className='w-auto h-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("pitch")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`w-3 h-3 rounded-full transition-all ${
                                           filesCounter.pitch ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('yes')}</p>
                       </div>
                       <div className='w-auto h-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("pitch")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`w-3 h-3 rounded-full transition-all ${
                                           !filesCounter.pitch ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('no')}</p>
                       </div>
                 </div>
               </div> 
               {filesCounter.pitch ? (
                 <div className='w-full h-auto'>
                     <div className='w-full h-auto flex flex-col items-center gap-2'>
                       <div className='w-auto h-auto'>
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>Upload your document</p>
                       </div>
                       <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                          <label className="cursor-pointer relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  onChange={handlePitchFileChange}
                            />
                            <UploadFile />
                          </label>
                       </div>
                     </div>
                 </div>
               ) : (
                 <div className='w-full h-auto'>
                     <div className="w-full grid grid-cols-1 gap-x-6 gap-y-4 my-2">
                       <Input
                          register={register} 
                          errors={errors} 
                          nameInput={t('startUp',{ returnObjects: true }).productName} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).productNameRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).productNamePlaceholder} 
                          className={'border-[1px] col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                       <Input 
                          register={register} 
                          errors={errors} 
                          nameInput={t('startUp',{ returnObjects: true }).siteAddress} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).siteAddressRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).siteAddressPlaceholder} 
                          className={'border-[1px] col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                     </div>
                 </div>
               )}
          </div>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).trial.businessPlan}</p>
               </div>
               <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
                 <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
                       <div className='w-auto h-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("business")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`w-3 h-3 rounded-full transition-all ${
                                           filesCounter.business ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('yes')}</p>
                       </div>
                       <div className='w-auto h-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("business")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`w-3 h-3 rounded-full transition-all ${
                                           !filesCounter.business ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('no')}</p>
                       </div>
                 </div>
               </div> 
               {filesCounter.business ? (
                 <div className='w-full h-auto'>
                     <div className='w-full h-auto flex flex-col items-center gap-2'>
                       <div className='w-auto h-auto'>
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>Upload your document</p>
                       </div>
                       <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                          <label className="cursor-pointer relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  onChange={handleBusinessFileChange}
                            />
                            <UploadFile />
                          </label>
                       </div>
                     </div>
                 </div>
               ) : (
                 <></>
               )}
          </div>
        </div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${problemsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setProblemsOpen(!problemsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-semibold text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.problems}</p>
               <div className={`${problemsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {problemsOpen && (
          <div className='w-full h-auto md:px-1'>
               <TextArea
                 title={t('startUp',{ returnObjects: true }).trial.problemsLabel}
                 register={register}
                 errors={errors} 
                 required={t('startUp',{ returnObjects: true }).trial.problemsRequired}
                 nameTextArea={"problem"} 
                 patternValue={''} 
                 patternMessage={''} 
                 placeholder={t('startUp',{ returnObjects: true }).trial.problemsPlaceholder}
               />
          </div>
        )}
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${solutionsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setSolutionsOpen(!solutionsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.solutions}</p>
               <div className={`${solutionsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {solutionsOpen && (
          <>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={t('startUp',{ returnObjects: true }).trial.solutionsUniqueValue}
                     register={register}
                     errors={errors} 
                     required={t('startUp',{ returnObjects: true }).trial.solutionsUniqueValueRequired} 
                     nameTextArea={"solution&innovation"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={t('startUp',{ returnObjects: true }).trial.solutionsUniqueValuePlaceholder }                                                 
                 />
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <div className='w-full h-auto flex flex-col gap-4 items-start'>
                    <div className='w-full h-auto'>
                        <p className='px-2 text-lg text-[#6b6b6b] dark:text-current'>{t('startUp',{ returnObjects: true }).trial.solutionsLevel}</p>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 items-start px-2'>
                      {Array.isArray(startUpData.trial.solutionsLevelList) &&
                        startUpData.trial.solutionsLevelList.map((item: string, index: number) => (
                            <div key={index} className='w-full flex flex-row gap-1 items-center'>
                                <div className='w-auto h-auto flex flex-row items-center gap-2 cursor-pointer' onClick={() => handleSolutionsLevelChange(index)}>
                                    <div className='border-2 rounded-full border-primary p-[1px]'>
                                        <div
                                            className={`w-2 h-2 rounded-full transition-all ${
                                              solutionsLevel == index ? "bg-primary" : "bg-white"
                                            }`}
                                        />
                                    </div>
                                </div>
                                <p className='text-black font-barlow font-medium text-[12px] xl:text-[14px] leading-[14px] mb-1'>{item}</p>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                    title={t('startUp',{ returnObjects: true }).trial.solutionsPosition}
                    register={register}
                     errors={errors} 
                     required={t('startUp',{ returnObjects: true }).trial.solutionsPositionRequired}
                     nameTextArea={"solution&innovation"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={t('startUp',{ returnObjects: true }).trial.solutionsPositionPlaceholder}                                                      
                     />
               </div>
          </>
        )}
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${businessOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setBusinessOpen(!businessOpen)
        }}>
            <div className='w-full h-auto flex justify-center items-center gap-2'>
                 <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.businessModel}</p>
                 <div className={`${businessOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                   <ChevDown />
                 </div>
            </div>
        </div>
        {businessOpen && (
                <>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessMonetization}
                            register={register}
                            errors={errors} 
                            required={t('startUp',{ returnObjects: true }).trial.businessMonetizationRequired}
                            nameTextArea={"businessModel"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessMonetizationPlaceholder}                                                 
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessDelivery}
                            register={register}
                            errors={errors} 
                            required={t('startUp',{ returnObjects: true }).trial.businessDeliveryRequired}
                            nameTextArea={"businessModel"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessDeliveryPlaceholder}
                        />
                    </div>
                    <div>
                        <label className='px-2 text-[#6b6b6b] '>{t('startUp',{ returnObjects: true }).trial.businessFinancial}</label>
                        <div className='w-full md:w-1/5 h-auto mx-20 bg-whiteGold drop-shadow-md flex justify-center items-center relative overflow-hidden mt-2 mb-6 p-2'>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handlePitchFileChange}
                            />
                            <p className='text-black font-barlow font-medium text-[13px] leading-4'>{t('startUp',{ returnObjects: true }).trial.choseFile}</p>
                            <UploadFile />
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessAccelerators}
                            register={register}
                            errors={errors} 
                            required={t('startUp',{ returnObjects: true }).trial.businessAcceleratorsRequired}
                            nameTextArea={"businessModel"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessAcceleratorsPlaceholder}                                            
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessKnowUs}
                            register={register}
                            errors={errors} 
                            required={t('startUp',{ returnObjects: true }).trial.businessKnowUsRequired}
                            nameTextArea={"businessModel"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessKnowUsPlaceholder}                                            
                        />
                    </div>
                </>
        )}
    </div>
  )
}

export default StartUpMvpRefactore