import { Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Home(props) {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/v1/image")
        .then((response) => setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <Flex
      position={"relative"}
      flexWrap={"wrap"}
      gap={5}
      mt={10}
      maxW={"90vw"}
      justifyContent={"center"}
    >
      {data.map((i) => {
        return <Card key={i._id} i={i} />;
      })}
    </Flex>
  ) : (
    <Flex
      h={"90vh"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"2rem"}
    >
      Loading...
    </Flex>
  );
}

export default Home;
