import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import { useLang } from 'stores/langStore'
import { useTranslation } from 'app/i18n/client'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
}

const TargetMarketDropDown = (props: Props) => {

  const {
    register,
    errors
  } = props;  

  const [targetMarketOpen, setTargetMarketOpen] = useState<boolean>(false);  
  const lang = useLang((s) => s.lang);
  const { t } = useTranslation(lang, 'formComponent')

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${targetMarketOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setTargetMarketOpen(!targetMarketOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.targetMarket}</p>
               <div className={`${targetMarketOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {targetMarketOpen && (
          <>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.targetCharacteristics}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).trial.targetCharacteristicsRequired}
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.targetCharacteristicsPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.targetCustomers}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).trial.targetCustomersRequired}
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.targetCustomersPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.targetEstimated}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).trial.targetEstimatedRequired}
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.targetEstimatedPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea
                  title={t('startUp',{ returnObjects: true }).trial.targetTotal}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).trial.targetTotalRequired}
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.targetTotalPlaceholder}
              />
            </div>
          </>
        )}
    </div>
  )
}

export default TargetMarketDropDown