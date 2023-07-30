// create api for post request
// save data in database with prisma

import { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;
      res.status(200).json({ message: 'Form data received successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid data received.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
