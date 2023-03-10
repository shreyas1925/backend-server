const joi = require('joi');

const addContentSchema = joi.object({
    content: joi.string().required()
});

module.exports = addContentSchema;