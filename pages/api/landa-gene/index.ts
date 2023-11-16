import { LandaGeneFormData } from '../../../app/types/global';
import { initialApplicationFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';

const sendFormData = new FormData();

async function submitLandaApplicationForm(
    formData: LandaGeneFormData, 
    setFormData: React.Dispatch<React.SetStateAction<LandaGeneFormData>>,
    csrfToken: string,
) {
    try {
      const response = await apiClient.post(
        'landa-application-form',
        sendFormData,
        {
          headers: {
            'content-type': 'multipart/form-data',
            'X-CSRFToken': csrfToken,
          },
        }
      );
  
      console.log(response);
      setFormData(initialApplicationFormData);
      console.log('Form data sent successfully!');
  
      return response;
    } catch (error) {
      console.error('Error sending form data:', error);
      setFormData(initialApplicationFormData);
    }
  }
 
  export {
    submitLandaApplicationForm
  }