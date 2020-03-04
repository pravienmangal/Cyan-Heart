import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must enter at least one character")
    .required("You need to enter your name"),
  email: Yup.string()
    .email("You must enter a valid email address")
    .required("You need to enter your email address"),
  message: Yup.string()
    .min(1, "Must have a character")
    .required("You need to enter message for the recipient")
});
