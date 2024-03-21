import 'dotenv';
import { Options } from 'sequelize';

const { dbUser, dbPass, dbName, dbHost } = process.env;
const config: Options = {
  dialect: 'postgres',
  timezone: '-03:00',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  // password: "1598753qscvbn",
  database: 'sres',

  dialectOptions: {
    statement_timeout: 300000
  }
};
export = config;
