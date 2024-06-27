import * as yup from "yup";

const loginSchma = yup.object({
  email: yup.string().email().required("cannot be empty"),
  password: yup
    .string()
    .min(6, "must be more than 6 characters")
    .required("cannot be empty"),
});

export default loginSchma;
