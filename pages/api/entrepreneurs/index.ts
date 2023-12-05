import apiClient from '../../../utils/api';

async function submitEntrepreneurForm(
  sendFormData: FormData,
  csrfToken: string,
) {

  console.log(sendFormData);

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
    console.log('Form data sent successfully!');

    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
  }
}

export {
  submitEntrepreneurForm
}