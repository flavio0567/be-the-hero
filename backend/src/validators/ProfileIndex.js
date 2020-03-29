const { Joi } = require('celebrate');

module.exports = async (req, res, next)  => {
  const schemaHeaders = Joi.object({
    authorization: Joi.string().required()
  }).unknown()

  try {
    await schemaHeaders.validateAsync(req.headers);

    return next();
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err });
  }
}