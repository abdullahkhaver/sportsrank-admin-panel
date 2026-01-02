import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
import {appConfig} from "./config/appConfig.js";
dotenv.config();

const PORT = appConfig.port || 5000;

let server;

const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');
  if (server) {
    server.close(() => process.exit(0));
  }
});
