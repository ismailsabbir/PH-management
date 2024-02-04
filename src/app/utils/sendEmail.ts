import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.node_end === 'production',
    auth: {
      user: 'ismail.hossain.diu22@gmail.com',
      pass: 'dtwh dhgw ujni hdzm',
    },
  });

  await transporter.sendMail({
    from: 'ismail.hossain.diu22@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
