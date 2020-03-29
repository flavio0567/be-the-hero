const { Joi } = require('celebrate');

module.exports = async (req, res, next)  => {
  const schemaHeaders = Joi.object({
    authorization: Joi.string().required()
  }).unknown()

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })

  try {
    await schemaHeaders.validateAsync(req.headers);
    await schema.validateAsync(req.body);
    
    return next();
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err });
  }
}