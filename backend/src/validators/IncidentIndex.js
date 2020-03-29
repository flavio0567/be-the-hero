const { Joi } = require('celebrate');

module.exports = async (req, res, next)  => {
  const schema = Joi.object().keys({
    page: Joi.number(),
  })

  try {
    await schema.validateAsync(req.query);
    
    return next();
  }
  catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err });
  }
}