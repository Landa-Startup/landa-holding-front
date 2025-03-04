import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import UploadFile from 'public/static/logos/UploadFile'
import ChevDown from 'public/static/logos/ChevDown'
import { useLang } from 'stores/langStore'
import { useTranslation } from 'app/i18n/client'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    handlePitchFileChange: (file: any) => void
}

const BussinessModelDropDown = (props: Props) => {

  const {
    register,
    errors,
    handlePitchFileChange
  } = props;    

  const [businessOpen, setBusinessOpen] = useState<boolean>(false);

  const lang = useLang((s) => s.lang)
  const { t } = useTranslation(lang, 'formComponent');

  return (
    <div>
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

export default BussinessModelDropDown