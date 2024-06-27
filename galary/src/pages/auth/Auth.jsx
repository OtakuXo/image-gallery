import React from "react";
import { useFormik } from "formik";
import Schma from "./authSchma";
import {
  useColorModeValue,
  Flex,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function Auth(props) {
  const bg = useColorModeValue("gray.100", "gray.800");

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Schma,
    onSubmit: async (values, action) => {
      try {
        await axios
          .post("http://localhost:5000/api/v1/auth/auth", values)
          .then((response) => console.log(response));
      } catch (err) {
        console.log(err);
      }
    },
  });
  // console.log(formik);
  return (
    <Flex minH={"85vh"} alignItems={"center"}>
      <VStack
        as={"form"}
        onSubmit={formik.handleSubmit}
        bg={bg}
        px={5}
        py={10}
        borderRadius={10}
      >
        <Heading as={"h3"} fontWeight={"bold"} fontSize={"2rem"} mb={5}>
          Sign up
        </Heading>
        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
          <FormLabel>name: </FormLabel>
          <Input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="name"
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel>email: </FormLabel>
          <Input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email"
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>password: </FormLabel>
          <Input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="password"
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.cpassword && formik.touched.cpassword}
        >
          <FormLabel>confirm password: </FormLabel>
          <Input
            name="cpassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.cpassword}
            placeholder="Confirm password"
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.cpassword}</FormErrorMessage>
        </FormControl>
        <Button type="submit">submit</Button>
      </VStack>
    </Flex>
  );
}

export default Auth;
