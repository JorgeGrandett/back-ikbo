const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]+$/).max(100).required(),
    barcode: Joi.string().pattern(/^[a-zA-Z\s]+$/).min(1).max(50).required(),
    batch: Joi.string().pattern(/^[a-zA-Z0-9\-\/]+$/).min(1).max(50).required(),
    amount: Joi.number().positive().required(),
    expiration_date: Joi.date().min('now').required()
});

export { createProductSchema };