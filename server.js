// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Booking endpoint
app.post('/api/book-appointment', (req, res) => {
  const { name, email, phone, date, time, doctor, service, message } = req.body;

  if (!name || !email || !phone || !date || !time || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Appointment Booking',
    text: `
New appointment booking:

Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Doctor: ${doctor || 'No preference'}
Service: ${service}
Message: ${message || 'N/A'}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Appointment booked successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
