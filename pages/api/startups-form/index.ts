import apiClient from '@/utils/api';

async function submitStartupsForm(
  sendFormData: FormData,
  csrfToken: string,
) {

  try {
    const response = await apiClient.post(
      'startups-form',
      sendFormData,
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'multipart/form-data',
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
  submitStartupsForm
}