import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import loginSchma from "./LoginSchma";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

function Login(props) {
  const bg = useColorModeValue("gray.100", "gray.800");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchma,
    onSubmit: async (value, action) => {
      console.log(action);
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        value
      );
      localStorage.setItem("token", res.data.token);
      action.resetForm();
      navigate("/");
      location.reload();
    },
  });

  return (
    <Flex minH={"85vh"} alignItems={"center"}>
      <VStack
        as={"form"}
        bg={bg}
        onSubmit={formik.handleSubmit}
        py={10}
        px={5}
        borderRadius={10}
      >
        <Heading as={"h3"} fontWeight={"bold"} fontSize={"2rem"} mb={5}>
          Login
        </Heading>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit"> submit </Button>
      </VStack>
    </Flex>
  );
}

export default Login;
