const joi = require('joi');

const addContentEntriesSchema = joi.object({

    newEntry: joi.object({
        name: joi.string().required(),
    }).required()
});

module.exports = addContentEntriesSchema;
