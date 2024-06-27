import { Box, Flex, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Topbar from "../components/topbar/Topbar";
import Advertisement from "../components/Advertisement";
import Basetopbar from "../components/topbar/Basetopbar";

function Latout({ children }) {
  const bg = useColorModeValue("#f01e2c", "#c30010");
  return (
    <VStack gap={0}>
      <Box width={"full"}>
        <Advertisement />
      </Box>
      <Box w={"full"} position={"sticky"} top={0} bg={bg}>
        <Topbar />
        <Basetopbar />
      </Box>
      <Flex w={"100%"} justifyContent={"center"}>
        {children}
      </Flex>
    </VStack>
  );
}

export default Latout;
