import * as yup from 'yup';
import { emailRegExp, phoneRegExp } from './constants';

export const schemaSignUp = yup.object().shape({
  name: yup.string().min(3).max(60).typeError().required(),

  email: yup
    .string()
    .email()
    .required()
    .matches(emailRegExp, 'email must be like: name@mail.com'),

  phone: yup
    .string()
    .required('Required')
    .matches(phoneRegExp, 'Number should start with code of Ukraine +380')
    .min(13, 'Number should consist of + and 12 digits')
    .max(13, 'Number should consist of + and 12 digits'),

  photo: yup.mixed(),
  // .required('Image is required'),
});
