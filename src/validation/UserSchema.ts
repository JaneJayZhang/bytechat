import { User } from '@/models/User';
import Joi from 'joi';

export const createUser = Joi.object<User>().keys({
  account: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
  mobile: Joi.string().pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/),
});

export const loginUser = Joi.object<User>().keys({
  account: Joi.string().required(),
  password: Joi.string().required(),
});
