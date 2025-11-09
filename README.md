# LandingPageLawyer
Landing Page para un bufete de abogados en React y Tailwind

CSG Estudio Jurídico - Proyecto corregido (Local)

Estructura:
- frontend/  -> React + Vite + Tailwind (puerto 5173)
- backend/   -> Node.js + Express + Nodemailer (puerto 5000)

Instrucciones locales:

1) Backend
--------------
cd backend
npm install
cp .env.example .env
# Edita backend/.env y coloca tus credenciales de Gmail (EMAIL_USER, EMAIL_PASS sin espacios)
npm run dev

2) Frontend
--------------
cd frontend
npm install
npm run dev

Notas:
- El frontend ya está configurado para llamar a http://localhost:5000/api/contact
- No incluyo node_modules en este paquete. Instala dependencias con npm install en cada carpeta.
- Asegúrate de usar una contraseña de aplicación de Gmail (no la contraseña normal).

