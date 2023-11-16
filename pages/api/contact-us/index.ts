import { ContactUSFormData } from '../../../app/types/global';
import { ContactFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';
import { UseFormReset } from 'react-hook-form';

async function submitContactForm(
  formData: ContactUSFormData, 
  csrfToken: string,
) {

  try {
    const response = await apiClient.post(
      'contactUs-form',
      JSON.stringify(formData),
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
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
  submitContactForm
}