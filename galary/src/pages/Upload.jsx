import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  VStack,
  Image,
  Input,
  Button,
  FormLabel,
  Text,
} from "@chakra-ui/react";

function Upload(props) {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [catagory, setCatagory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image, name);
    formData.append("catagory", catagory);

    try {
      await axios
        .post("http://localhost:5000/api/v1/user/upload", formData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setImage("");
          setSuccess(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack
      minH={"85vh"}
      alignItems={"center"}
      justifyContent={"center"}
      p={10}
    >
      {success && <Text>{success.msg}</Text>}
      {image && <Image src={URL.createObjectURL(image)} maxH={"50vh"} />}
      <VStack
        as={"form"}
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
      >
        <FormControl>
          <FormLabel>choose a image to upload</FormLabel>

          <Input
            type="file"
            name="image"
            onChange={(e) => {
              setSuccess("");
              setImage(e.target.files[0]);
            }}
            accept={".jpg, .png, .jpeg"}
            border={"none"}
          />
        </FormControl>
        <FormControl>
          <FormLabel>name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>catagory</FormLabel>
          <Input
            type="text"
            value={catagory.catagory}
            onChange={(e) => setCatagory(e.target.value)}
          />
        </FormControl>
        <Button type="submit">upload</Button>
      </VStack>
    </VStack>
  );
}

export default Upload;
