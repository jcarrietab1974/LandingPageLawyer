import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Seguridad básica
app.use(helmet());

// CORS: restringir al frontend local (Vite)
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: FRONTEND_ORIGIN }));

app.use(express.json());

// Limitador para protección básica contra abuso
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 8, // 8 solicitudes por IP por minuto
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/contact', limiter);

// Rutas
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT} 🚀`));
