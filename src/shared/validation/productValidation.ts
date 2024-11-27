const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z0-9\s]+$/).max(100).required(),
    barcode: Joi.string().pattern(/^\d+$/).min(1).max(50).required()
});

export { createProductSchema };