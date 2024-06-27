import { Text, Box, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function Catagory({ i }) {
  return (
    <Link
      as={RouterLink}
      to={"/explore"}
      position={"relative"}
      maxW={"500px"}
      h={"25vh"}
      w={"20vw"}
      p={0}
      _hover={{ boxShadow: "xl", rounded: "md", p: "10px" }}
    >
      <Box
        w={"full"}
        h={"full"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        bg={"#00000090"}
        borderRadius={10}
      ></Box>
      <Image
        src={i.src}
        alt="i.name"
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        borderRadius={10}
      />
      <Text
        position={"absolute"}
        color={"white"}
        fontWeight={"900"}
        fontSize={"2rem"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        {i.name}
      </Text>
    </Link>
  );
}

export default Catagory;
