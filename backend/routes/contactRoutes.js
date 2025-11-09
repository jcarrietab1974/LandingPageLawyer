import express from 'express';
import { transporter } from '../config/mailer.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ success: false, message: 'Todos los campos obligatorios: nombre, email y mensaje.' });
  }

  try {
    const info = await transporter.sendMail({
      from: `"CSG Estudio Jurídico" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje web: ${asunto || 'Sin asunto'}`,
      html: `
        <h3>Nuevo mensaje desde la web</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto || 'Sin asunto'}</p>
        <p><strong>Mensaje:</strong><br>${mensaje.replace(/\n/g, '<br>')}</p>
      `
    });

    console.log('Correo enviado. messageId:', info.messageId);
    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    const message = process.env.NODE_ENV === 'development' ? String(error) : 'No se pudo enviar el mensaje.';
    res.status(500).json({ success: false, message });
  }
});

export default router;
