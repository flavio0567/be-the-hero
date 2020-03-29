const { Joi } = require('celebrate');

module.exports = async (req, res, next)  => {
  const schemaHeaders = Joi.object({
    authorization: Joi.string().required()
  }).unknown()

  const schemaParams = Joi.object().keys({
    id: Joi.number().required()
  })

  try {
    await schemaHeaders.validateAsync(req.headers);
    await schemaParams.validateAsync(req.params);

    return next();
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err });
  }
}