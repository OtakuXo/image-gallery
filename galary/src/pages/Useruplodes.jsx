import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import Card from "../components/Card";

function Useruplodes(props) {
  const token = localStorage.getItem("token");
  const [images, setImage] = useState([]);
  console.log(images);

  const fetchUplodes = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/user/upload", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setImage(res.data.uploadedImages);
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
        {images.map((i) => {
          return <Card key={i._id} i={i} />;
        })}
      </Flex>
    )
  );
}

export default Useruplodes;
