import apiClient from '../../../utils/api';

async function submitInvestorRegistrationForm(
  sendFormData: FormData,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'investor-registration',
      sendFormData,
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'content-type': 'multipart/form-data',
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