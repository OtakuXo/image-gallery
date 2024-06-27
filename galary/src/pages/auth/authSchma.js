import * as yup from "yup";

const Schma = yup.object({
  name: yup
    .string()
    .min(5, "must be more than 5 characters")
    .required("cannot be empty"),
  email: yup.string().email().required("cannot be empty"),
  password: yup
    .string()
    .min(6, "must be more than 6 characters")
    .required("cannot be empty"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "password not matched")
    .required("cannot be empty"),
});

export default Schma;
