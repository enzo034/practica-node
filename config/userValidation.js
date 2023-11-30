import Joi from 'joi'

export const userValidation = Joi.object({
    nombre: Joi.string()
    .alphanum(),

    edad: Joi.number().positive()
}) 