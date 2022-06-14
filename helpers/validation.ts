import Joi from "@hapi/joi";
import { RegisterationData } from "../pages/api/register";

//Register validation
export function validateReg(data: RegisterationData) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .regex(/^[a-zA-Zа-яёА-ЯЁ ]+$/u)
      .required()
      .messages({
        "string.empty": `Имя не может быть пустым`,
        "string.min": `Имя должен быть более 2 символов`,
        "string.pattern.base": `Просим использовать допустимые символы: кирилица или латинский алфавит вам в помощь`,
      }),
    email: Joi.string().min(6).required().email().messages({
      "string.empty": `Email не может быть пустым`,
      "string.min": `Email должен быть более 6 символов`,
      "string.email": `Введите действующий Email`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": `Пароль не может быть пустым`,
      "string.min": `Пароль должен быть более 6 символов`,
    }),
    workPlace: Joi.string()
      .regex(/^[a-zA-Zа-яёА-ЯЁ0-9 _]+$/u)
      .min(3)
      .required()
      .messages({
        "string.empty": `Место работы не может быть пустым`,
        "string.min": `Место работы должно быть более 2 символов`,
        "string.pattern.base": `Просим использовать допустимые символы: кирилица или латинский алфавит вам в помощь`,
      }),
  });

  const { error } = schema.validate(data);
  console.log(error);
  return error;
}

//Login validation

export function validateLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(6).required().messages({
      "string.empty": `Email не может быть пустым`,
      "string.min": `Проверьте Email`,
      "string.email": `Введите действующий Email`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": `Пароль не может быть пустым`,
      "string.min": `Проверьте пароль`,
    }),
  });
  const { error } = schema.validate(data);
  return error;
}
