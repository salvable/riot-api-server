import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    console.log("errorMiddleware!!!!!!!")

    res.status(status).send(
        {
            status,
            message,
        })
}

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        output: { payload: error, statusCode },
    } = boom.boomify(err);

    res.status(statusCode).json({ error });
    if (statusCode >= 500) {
        handle(err);
    }
};

export default errorMiddleware;