import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Updateavatar({ setAvatarControl }) {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);
    try {
      await axios
        .post("http://localhost:5000/api/v1/user/avatar", formData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setImage("");
          setAvatarControl("none");
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <VStack
      as={"form"}
      w={"100%"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      onSubmit={submitHandler}
    >
      <FormControl display={"flex"} flexDir={"column"} alignItems={"center"}>
        <FormLabel color={"white"} fontWeight={"bold"}>
          choose your new avatar
        </FormLabel>
        <Input
          w={"30vw"}
          type="file"
          value={image.filename}
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormControl>
      <Button type="submit">submit</Button>
    </VStack>
  );
}

export default Updateavatar;
