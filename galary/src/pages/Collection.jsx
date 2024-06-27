import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Collection(props) {
  const token = localStorage.getItem("token");
  const [images, setImages] = useState([]);
  // console.log(image);

  const fetchUplodes = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/user/collection",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setImages(res.data.collectedImages);
  };

  useEffect(() => {
    fetchUplodes();
  }, []);

  return (
    images && (
      <Flex
        flexWrap={"wrap"}
        gap={5}
        mt={10}
        maxW={"90vw"}
        justifyContent={"center"}
      >
        {images.map((i, index) => {
          return <Card key={index} i={i} />;
        })}
      </Flex>
    )
  );
}

export default Collection;
