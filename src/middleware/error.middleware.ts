import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    response
        .status(status)
        .send({
            status,
            message,
        })
}

export default errorMiddleware;