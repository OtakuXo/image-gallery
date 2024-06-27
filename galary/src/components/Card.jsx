import { Box, Button, Image, Link } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";

const clickHadler = async (i) => {
  const token = localStorage.getItem("token");
  !token && console.log("token missing");

  const formData = new FormData();
  formData.append("image", i);
  console.log(i);

  const res = await axios.post(
    "http://localhost:5000/api/v1/user/collection",
    {
      id: i._id,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  alert(res.data.msg);
};

function Card({ i }) {
  return (
    <Box position={"relative"}>
      <Link
        as={routerLink}
        to={`/get/${i._id}`}
        display={"flex"}
        height={"200px"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Image
          src={`data: ${i.type};base64, ${i.image}`}
          w={"100%"}
          h={"100%"}
          display={"block"}
          height={"auto"}
          borderRadius={10}
          cursor={"pointer"}
          _hover={{ padding: "1px" }}
        />
      </Link>
      <Button
        bg={"#00000080"}
        position={"absolute"}
        bottom={0}
        right={0}
        borderRadius={"50%"}
        onClick={() => clickHadler(i)}
      >
        {<BiDotsVerticalRounded />}
      </Button>
    </Box>
  );
}

export default Card;
