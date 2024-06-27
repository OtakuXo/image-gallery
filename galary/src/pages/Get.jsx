import { useState, useEffect } from "react";
import axios from "axios";
import { Image, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Get(props) {
  const bg = useColorModeValue("gray.100", "gray.800");
  const params = useParams();
  const [heroImage, setHeroImage] = useState("");
  const [recomendedImage, setRecomendedImage] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/image/" + params.imageid
      );
      setHeroImage(res.data.heroImage);
      setRecomendedImage(res.data.recomendImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params]);
  return heroImage ? (
    <VStack w={"100%"}>
      <Flex
        p={5}
        justifyContent={"center"}
        overflow={"hidden"}
        bg={bg}
        w={"100%"}
      >
        <Flex justifyContent={"center"}>
          <Flex h={"60vh"}>
            <Image
              src={`data:${heroImage.type};base64,${heroImage.image}`}
              alt={heroImage.name}
              w={"100%"}
              h={"100%"}
              borderRadius={"10px"}
              // maxH={"80vh"}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexWrap={"wrap"}
        gap={5}
        mt={10}
        maxW={"90vw"}
        justifyContent={"center"}
      >
        {recomendedImage.map((i) => {
          return <Card key={i._id} i={i} />;
        })}
      </Flex>
    </VStack>
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

export default Get;
