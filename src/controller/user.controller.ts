import * as express from "express";
import {User} from "../models/user";
import {HttpException} from "../exceptions/HttpException";
const UserService = require("../service/user.service")


export const addUser = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const userId: string = req.body.userId
    const password: string = req.body.password
    const email: string = req.body.email
    const name: string = req.body.name

    if(!userId || !password || !email || !name){
        throw new HttpException(400, 'Bad Request');
    }

    const user = await UserService.addUser(userId,password,email,name)

    if(!user){
        throw new HttpException(400, 'Bad Request');
    }

    return res.send(
        {
            user: user
        }
    )
}
