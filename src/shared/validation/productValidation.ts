const Joi = require('joi');

const createProductSchema = Joi.object({
    idProduct: Joi.number().valid(0).optional(),
    name: Joi.string().pattern(/^[a-zA-Z0-9\s]+$/).min(1).max(100).required(),
    barcode: Joi.string().pattern(/^\d+$/).min(1).max(50).required()
});

export { createProductSchema };