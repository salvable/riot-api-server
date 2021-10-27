import {Table, Column, Model, HasMany, AllowNull, PrimaryKey, DataType} from 'sequelize-typescript';
import {UserAttributes} from './attributes/user.attribute'

@Table
export class User extends Model<UserAttributes>{

    @PrimaryKey
    @Column(DataType.STRING(20))
    userId: string;

    @Column(DataType.STRING(255))
    password: string;

    @Column(DataType.STRING(30))
    email: string;

    @AllowNull(true)
    @Column(DataType.STRING(20))
    name: string;

}
