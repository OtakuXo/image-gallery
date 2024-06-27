import { Select, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Basetopbar(props) {
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();

  const changeHandler = (e) => {
    switch (e.target.value) {
      case "home":
        navigate("/");
        break;
      case "upload":
        navigate("/upload");
        break;
      case "browse":
        navigate("/brouse");
        break;
      case "colormode":
        toggleColorMode();
        break;
      case "login":
        navigate("/login");
        break;
      case "sign up":
        navigate("/auth");
        break;
    }
  };

  return (
    <Select
      display={{ base: "block", md: "none" }}
      onChange={(e) => changeHandler(e)}
    >
      <option value={"home"}>Home</option>
      <option value={"upload"}>Upload</option>
      <option value={"browse"}>Brouse</option>
      <option value={"colormode"}>change color mode</option>
      <option value={"login"}>login</option>
      <option value={"sign up"}>sign up</option>
    </Select>
  );
}

export default Basetopbar;
