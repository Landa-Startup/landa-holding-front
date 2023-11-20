import { PartnerMembershipFormData } from '../../../app/types/global';
import { initialPartnerMembershipFormData } from 'app/initials/initObjects';
import apiClient from '@/utils/api';

const sendFormData = new FormData();

async function submitPartnerMembershipForm(
  formData: PartnerMembershipFormData, 
  setFormData: React.Dispatch<React.SetStateAction<PartnerMembershipFormData>>,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'partner-membership',
      sendFormData,
      {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      }
    );

    console.log(response);
    setFormData(initialPartnerMembershipFormData);
    console.log('Form data sent successfully!');

    return response;
  } catch (error) {

    console.error('Error sending form data:', error);

    setFormData(initialPartnerMembershipFormData);
    
  }
}
 
  export {
    submitPartnerMembershipForm
  }