import { Box, Link, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function Imagelinks({ i }) {
  return (
    <Link
      as={RouterLink}
      to={"/" + i.link}
      position={"relative"}
      maxW={"500px"}
      h={"10vh"}
      // w={"10vw"}
      w={{ base: "200px", md: "10vw" }}
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
        src={i.image}
        alt={i.text}
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        borderRadius={10}
      />
      <Text
        position={"absolute"}
        color={"white"}
        fontWeight={"900"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        {i.text}
      </Text>
    </Link>
  );
}

export default Imagelinks;
