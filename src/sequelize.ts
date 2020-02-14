
import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const envVariables = config.prod;

// sequelize instance
export const sequelize = new Sequelize({
    "host":     envVariables.database.host,
    "username": envVariables.database.username,
    "password": envVariables.database.password,
    "database": envVariables.database.schema,

    dialect: 'postgres',
    storage: ':memory:',
});
