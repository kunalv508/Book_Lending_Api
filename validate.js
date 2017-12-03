let Joi = require("joi");
const book = {
  isbn : Joi.number().required(),
  title : Joi.string().required(),
  author : Joi.string().required(),
  genre : Joi.string(),
  pubInfo : Joi.object().keys({
    publishDate : Joi.string(),
    publisher : Joi.string()
  }),
  availability : Joi.string().required(),
}

const checkId = {
  bookId : Joi.string().required()
}

module.exports = {
  bookSchema : book,
  checkId : checkId
}