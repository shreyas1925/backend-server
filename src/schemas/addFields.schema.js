const joi = require('joi');

const addFieldsSchema = joi.object({
    newField: joi.string().required()
});

module.exports = addFieldsSchema;