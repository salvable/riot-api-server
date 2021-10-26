import {Sequelize} from 'sequelize-typescript';
import {config} from '../config/config';
import {User} from "./user";

export const sequelize =  new Sequelize({
    database: config.development.database || "test",
    username: config.development.username || "root",
    password: config.development.password,
    dialect: 'mysql',
    models: [User]
});
