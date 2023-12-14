import apiClient from '@/utils/api';

async function submitHandiCraftApplicationForm(
  sendFormData: FormData,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'handicraft-application-form',
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
  submitHandiCraftApplicationForm
}