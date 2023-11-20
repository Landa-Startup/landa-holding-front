import { StartupsFormData } from '../../../app/types/global';
import { initialStartupsFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';
import { UseFormReset } from 'react-hook-form';

const sendFormData = new FormData();

async function submitStartupsForm(
    formData: StartupsFormData, 
    setFormData: React.Dispatch<React.SetStateAction<StartupsFormData>>,
    csrfToken: string,
) {
    try {
      const response = await apiClient.post(
        'startups-form',
        sendFormData,
        {
          headers: {
            'content-type': 'multipart/form-data',
            'X-CSRFToken': csrfToken,
          },
        }
      );
  
      console.log(response);
      setFormData(initialStartupsFormData);
      console.log('Form data sent successfully!');
  
      return response;
    } catch (error) {
      console.error('Error sending form data:', error);
  
      setFormData(initialStartupsFormData);
    }
  }

  export {
    submitStartupsForm
  }