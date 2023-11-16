import { InvestorRegistrationFormData } from '../../../app/types/global';
import { initialInvestorRegistrationFormData } from '../../../app/initials/initObjects'
import apiClient from '@/utils/api';
import { UseFormReset } from 'react-hook-form';
import exp from 'constants';

const sendFormData = new FormData();

async function submitInvestorRegistrationForm(
  formData: InvestorRegistrationFormData,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'investor-registration',
      sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      }
    );
    console.log('Form data sent successfully!');

    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
  }
}


export {
  submitInvestorRegistrationForm
}