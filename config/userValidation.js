import Joi from 'joi'

export const userValidation = Joi.object({
    nombre: Joi.string()
    .alphanum()
    .min(4)
    .max(25),

    edad: Joi.number().positive().max(120)
}) 