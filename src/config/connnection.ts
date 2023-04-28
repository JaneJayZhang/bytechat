import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { DB_CONNECTION_DETAIL } from '../helpers/constants';
import path from 'path';

const dbName = DB_CONNECTION_DETAIL.DB_NAME as string;
const dbUser = DB_CONNECTION_DETAIL.DB_USER as string;
const dbHost = DB_CONNECTION_DETAIL.DB_HOST;
const dbDriver = DB_CONNECTION_DETAIL.DB_DTIVER as Dialect;
const dbPassword = DB_CONNECTION_DETAIL.DB_PASSWORD;

const sequelize: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  models: [path.join(__dirname, '../models/*.ts')],
});

export { sequelize, Sequelize };
