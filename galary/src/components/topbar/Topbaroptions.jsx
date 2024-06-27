import { Button } from "@chakra-ui/react";

import React from "react";
import { useNavigate } from "react-router-dom";

function Topbaroptions({ i }) {
  const navigate = useNavigate();
  return (
    <Button bg={"none"} onClick={() => navigate(`/${i.link}`)}>
      {i.text}
    </Button>
  );
}

export default Topbaroptions;
