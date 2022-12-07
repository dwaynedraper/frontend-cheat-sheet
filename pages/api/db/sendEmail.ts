import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmailMessage } from '../../../utils/sendgrid-mail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { to, subject, text, html } = req.body;
    const emailResponse = sendEmailMessage(to, subject, text, html);
    res.status(202).json({ emailResponse });
  } else {
    res.status(404).json({ message: 'Hello' });
  }
}