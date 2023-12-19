import apiClient from '../../../utils/api';

async function submitEntrepreneurForm(
  sendFormData: FormData,
  csrfToken: string,
) {



  try {
    const response = await apiClient.post(
      'entrepreuneur-form',
      sendFormData,
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'content-type': 'multipart/form-data',
        },
      }
    );


    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
  }
}

export {
  submitEntrepreneurForm
}