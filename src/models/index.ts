import {Sequelize} from 'sequelize';
import {config} from '../config/config';

export const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
    }
)

