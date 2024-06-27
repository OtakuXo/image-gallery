import { Avatar, Divider, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Updateavatar from "../components/Updateavatar";
import Imagelinks from "../components/Imagelinks";

const data = [
  {
    link: "useruplodes",
    text: "upload",
    image: "/Pins/upload.jpg",
  },
  {
    link: "collection",
    text: "Collection",
    image: "/Pins/collection.jpg",
  },
];
function Profile(props) {
  const userData = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const [avatarControl, setAvatarControl] = useState("none");

  return token ? (
    <VStack mt={10} w={"90vw"} minH={"83.5vh"}>
      <VStack
        bg={"#00000090"}
        display={avatarControl}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Updateavatar setAvatarControl={setAvatarControl} />
      </VStack>
      <VStack>
        <Button
          onClick={() => setAvatarControl("")}
          p={0}
          h={"inherit"}
          w={"inherit"}
          borderRadius={"50%"}
        >
          {userData.user.avatar ? (
            <Avatar
              size={"2xl"}
              name="avatar"
              src={`data: ${userData.user.avatar.type};base64,${userData.user.avatar.image}`}
            />
          ) : (
            <Avatar
              size={"2xl"}
              name="avatar"
              src={`data: ${""};base64,${""}`}
            />
          )}
        </Button>
        <Text fontSize={"1.5rem"} fontWeight={"bold"} px={20}>
          {userData.user.name}
        </Text>
        <Divider h={2} bg={"gray.200"} borderRadius={10} />
      </VStack>
      <Flex w={"100%"} justifyContent={"start"} gap={10}>
        {data.map((i) => (
          <Imagelinks key={i.text} i={i} />
        ))}
      </Flex>
    </VStack>
  ) : (
    <Flex>You are not loeged in</Flex>
  );
}

export default Profile;
