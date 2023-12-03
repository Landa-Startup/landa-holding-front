import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from '@/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';
// import { StartupsFormData } from 'app/types/global';

export default function StartupFormIdea({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {

  return (
    <>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <TextArea
          title="Explain your idea in 5 lines?*"
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="ideaExplanation"
          patternMessage=""
          patternValue=""
          required="this is required"
        />
        <TextArea
          title="How did you hear about us?*"
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="getToKnowUs"
          patternMessage=""
          patternValue=""
          required="this is required"
        />
      </div>
    </>
  );
}
