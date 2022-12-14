import * as yup from 'yup';
import {
  emailRegExp,
  phoneRegExp,
  SUPPORTED_FORMATS,
  FILE_SIZE,
} from './constants';

export const schemaSignUp = yup.object().shape({
  name: yup.string().min(2).max(60).required(),

  email: yup
    .string()
    .max(60)
    .email()
    .required()
    .matches(emailRegExp, 'email must be like: name@mail.com'),

  phone: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Number should start with code of Ukraine +380')
    .min(13, 'Number should consist of + and 12 digits')
    .max(13, 'Number should consist of + and 12 digits'),

  position_id: yup.number().integer().min(1),

  photo: yup
    .mixed()
    .nullable(true)
    .test(
      'FILE_SIZE',
      `File too big, can't exceed 5 Mb`,
      value => value === null || (value && value.size <= FILE_SIZE)
    )
    .test(
      'photo size',
      'must be min 70X70',
      value => value === null || (value && value.size >= 70 * 70)
    )
    .test(
      'fileType',
      `must be ${SUPPORTED_FORMATS}`,
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
