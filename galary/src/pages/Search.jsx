import React from "react";
import {
  Image,
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Grid,
  Button,
} from "@chakra-ui/react";
import Catagory from "../components/Catagory";
import { FiSearch } from "react-icons/fi";
import { catagory } from "../dummy";

function Search() {
  return (
    <Box>
      <Box p={10}>
        <Text fontSize={"2rem"} fontWeight={"bold"} textAlign={"center"}>
          Search photos
        </Text>
        <Flex alignItems={"center"}>
          <Input
            type="text"
            placeholder="search"
            bg={"white"}
            borderRadius={"10px 0 0 10px"}
            _focus={{ outline: "none", border: "none" }}
          />
          <Button borderRadius={" 0 10px 10px 0"}>
            <FiSearch fontSize={"2rem"} />
          </Button>
        </Flex>
      </Box>
      <Box>
        <Heading as={"h2"} textAlign={"center"} mb={10}>
          Choose what you like
        </Heading>
        <Grid gridTemplateColumns={"repeat(4, auto)"} gap={5}>
          {catagory.map((i) => (
            <Catagory key={i.id} i={i} />
          ))}
        </Grid>
      </Box>

      <Input type="file" />
    </Box>
  );
}

export default Search;
