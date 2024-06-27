import {
  Flex,
  Button,
  Switch,
  useColorMode,
  Avatar,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Topbaroptions from "./Topbaroptions";
import { Link as routerLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Topbar(props) {
  const userData = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const options = [
    { text: "Home", link: "" },
    { text: "Browsr", link: "brouse" },
    { text: "Upload", link: "upload" },
  ];

  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"10px 20px"}
      h={"60px"}
    >
      <Flex gap={5} alignItems={"center"} h={"100%"}>
        <Link as={routerLink} to={"/profile"}>
          {userData.user.avatar ? (
            <Avatar
              name="avatar"
              src={`data: ${userData.user.avatar.type};base64,${userData.user.avatar.image}`}
            />
          ) : (
            <Avatar name="avatar" src={`data: ${""};base64,${""}`} />
          )}
        </Link>
        {options.map((i) => (
          <Topbaroptions key={i.text} i={i} />
        ))}
      </Flex>
      <Flex gap={10} alignItems={"center"}>
        <Switch size={"lg"} onChange={toggleColorMode} />
        <Flex gap={5}>
          <Button bg={"none"} onClick={() => navigate("/login")}>
            login
          </Button>
          <Button bg={"none"} onClick={() => navigate("/auth")}>
            sign up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Topbar;
