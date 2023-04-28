import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const DB_CONNECTION_DETAIL = {
  DB_USER: 'postgres',
  DB_PASSWORD: 'admin',
  DB_HOST: '127.0.0.1',
  DB_DTIVER: 'postgres',
  DB_PORT: '5432',
  DB_NAME: 'bytechat',
};

export const staticFilePath = path.join(__dirname, '/public');

const salt = bcrypt.genSaltSync(10);

export const JWT_SECRATE = process.env.JWT_SECRATE || 'temp';
console.log('process.env.JWT_SECRATE', process.env.JWT_SECRATE);

export const comparePasswords = (userPassword: string, reqPassword: string) => bcrypt.compareSync(reqPassword, userPassword);

export const cryptPassword = (password: string) => bcrypt.hashSync(password, salt);
