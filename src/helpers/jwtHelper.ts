import jwt from 'jsonwebtoken';
import { User } from '@/models/User';
import { JWT_SECRATE } from './constants';

export const generateToken = (data: Partial<User>) => {
  const token = jwt.sign(data, JWT_SECRATE, {
    expiresIn: '2 days',
  });

  return token;
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRATE);
  console.log('token', decoded);
  return decoded;
};
