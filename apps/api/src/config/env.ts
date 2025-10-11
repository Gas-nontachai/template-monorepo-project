import dotenv from 'dotenv';

dotenv.config();

export const env = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  API_PORT: Number(process.env.API_PORT || 3001),
};
