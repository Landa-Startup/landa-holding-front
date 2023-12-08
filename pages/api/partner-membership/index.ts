import apiClient from '../../../utils/api';

async function submitPartnerMembershipForm( 
  sendFormData: FormData,
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
    console.log('Form data sent successfully!');

    return response;
  } catch (error) {

    console.error('Error sending form data:', error);

    
  }
}
 
  export {
    submitPartnerMembershipForm
  }