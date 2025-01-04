const Joi = require('joi');


const signupSchema = Joi.object({
  name: Joi.string().alphanum().regex(/^[a-zA-Z\s]*$/).required(),
  email: Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    "string.email": `Invalid email address`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": `Password must be at least 6 characters long`,
  }),  
});


const loginSchema = Joi.object({
  email: Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    "string.email": `Invalid email address`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": `Password must be at least 6 characters long`,
  }),  
});

module.exports = { signupSchema , loginSchema };