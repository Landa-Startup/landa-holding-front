import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import { useTranslation } from 'app/i18n/client'
import { useLang } from 'stores/langStore'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    solutionsLevel: number
    handleSolutionsLevelChange: (index: number) => void
}

const SolutionLevel = (props: Props) => {

  const {
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange
  } = props;     

  const lang = useLang((s) => s.lang);
  const { t } = useTranslation(lang, 'formComponent');

  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);
  const startUpData = t('startUp', { returnObjects: true });


  return (
    <div>
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
                    <div className="w-full h-auto flex flex-col gap-1 items-start px-2">
                      {Array.isArray(startUpData.trial.solutionsLevelList) &&
                        startUpData.trial.solutionsLevelList.map((item: string, index: number) => (
                          <div key={index} className="w-full flex flex-row gap-1 items-center">
                            <div 
                              className="w-auto h-auto flex flex-row items-center gap-2 cursor-pointer" 
                              onClick={() => handleSolutionsLevelChange(index)}
                            >
                              <div className="border-2 rounded-full border-primary p-[1px]">
                                <div
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    solutionsLevel === index ? "bg-primary" : "bg-transparent"
                                  }`}
                                />
                              </div>
                            </div>
                            <p className="text-black font-barlow font-medium text-[12px] xl:text-[14px] leading-[14px] mb-1">
                              {item}
                            </p>
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
    </div>
  )
}

export default SolutionLevel