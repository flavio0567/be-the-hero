const { Joi } = require('celebrate');

module.exports = async (req, res, next)  => {
  const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(12),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
  })

  try {
    await schema.validateAsync(req.body);
    return next();
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err });
  }
}