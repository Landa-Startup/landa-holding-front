import { Entrepreuneur } from 'app/types/global';
import { initialFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';
import { UseFormReset } from 'react-hook-form';

async function submitEntrepreneurForm(
  formData: Entrepreuneur,
  csrfToken: string,
) {

  try {
    const response = await apiClient.post(
      'entrepreuneur-form',
      JSON.stringify(formData),
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'content-type': 'application/json',
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
  submitEntrepreneurForm
}