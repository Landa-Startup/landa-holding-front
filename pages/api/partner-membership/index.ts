import { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  streetAddress: string;
  streetAddressLine2: string;
  postalCode: string;
  companyName: string;
  investmentCeiling: string;
  positionInTeam: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;
      console.log('Received form data:', formData);

      res
        .status(200)
        .json({ message: 'Form data received and processed successfully.' });
    } catch (error) {
      console.error('Error processing form data:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while processing form data.' });
    }
  } else {
    res.status(405).end();
  }
}
