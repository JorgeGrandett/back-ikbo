import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validate = (schema: ObjectSchema, property: 'body' | 'query' | 'params' = 'body') => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req[property], { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => detail.message);
            res.status(400).json({ errors });
            return;
        }

        next();
    };
};

export default validate;