import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Comprobación básica de variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
  console.warn('[MAILER] Falta EMAIL_USER, EMAIL_PASS o EMAIL_TO en las variables de entorno. Revisa backend/.env');
}

// Crear transporter SMTP con Gmail (puerto 465, SSL)
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificar conexión (solo en desarrollo — se muestra en consola)
transporter.verify((error, success) => {
  if (error) {
    console.error('Error al conectar con el servidor de correo:', error);
  } else {
    console.log('Servidor de correo listo para enviar mensajes ✅');
  }
});
