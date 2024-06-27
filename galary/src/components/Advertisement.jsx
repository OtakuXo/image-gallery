import React from "react";
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

function Advertisement(props) {
  return (
    <Flex
      bg={useColorModeValue("blue", "blue.800")}
      justifyContent={"center"}
      w={"full"}
      p={3}
      h={"40px"}
      gap={2}
    >
      <Text>free photos</Text>
      <Image src="" alt="img" />
    </Flex>
  );
}

export default Advertisement;
