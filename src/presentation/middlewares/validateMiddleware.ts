import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { HttpResponseFormat } from '../../shared/utils/responseFormat';
import { HttpCodes } from '../../shared/constants/serverHttpCodes';

let responseFormat: HttpResponseFormat = new HttpResponseFormat();

const validate = (schema: ObjectSchema, property: 'body' | 'query' | 'params' = 'body') => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req[property], { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => detail.message);
            responseFormat.set('', errors, HttpCodes.BAD_REQUEST);
            res.status(HttpCodes.BAD_REQUEST).json(responseFormat.get());
            return;
        }

        next();
    };
};

export default validate;