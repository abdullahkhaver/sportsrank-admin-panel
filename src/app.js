import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from "express-rate-limit";
import { errorHandler } from './middleware/error.middleware';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.get('/api/v1/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});
app.use(errorHandler);

export default app;
