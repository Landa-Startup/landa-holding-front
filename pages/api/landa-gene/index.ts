import apiClient from '@/utils/api';

async function submitLandaApplicationForm(
  sendFormData: FormData,
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




    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
  }
}

export {
  submitLandaApplicationForm
}