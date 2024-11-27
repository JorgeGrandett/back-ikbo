const Joi = require('joi');

const manageInventorySchema = Joi.object({
    idProduct: Joi.number().positive().allow(0).required(),
    batch: Joi.string().pattern(/^[a-zA-Z0-9\-\/]+$/).min(1).max(50).required(),
    amount: Joi.number().positive().required(),
    expirationDate: Joi.date().min('now').allow(null).required(),
    operation: Joi.string().valid('create', 'add', 'subtract').required()
});

export { manageInventorySchema };