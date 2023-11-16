import { JobFormData } from 'app/types/global';
import { initialJobFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';
import { UseFormReset } from 'react-hook-form';

const sendFormData = new FormData();

async function submitApplyJobForm(
  formData: JobFormData, 
  setFormData: React.Dispatch<React.SetStateAction<JobFormData>>,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'apply-job-form',
      sendFormData,
      {
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
  submitApplyJobForm
}