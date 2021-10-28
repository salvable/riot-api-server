import {User} from '../models/user'
import {HttpException} from "../exceptions/HttpException";
import bcrypt = require("bcrypt");

export const addUser = async (userId: string, password: string, email: string, name: string): Promise<User> => {

    if (!userId || !password || !email || !name){
        throw new HttpException(400, 'Bad Request');
    }

    const user = await User.findByPk(userId)

    if(user){
        console.log("#####$$$##")
        throw new HttpException(409, 'Conflict');
        console.log("#######")
    }

    console.log("!!!!!")

    const hash_password = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        userId: userId,
        password: hash_password,
        email: email,
        name: name,
    })

    return newUser
};