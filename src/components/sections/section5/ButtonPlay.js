import { Center, Flex } from "@chakra-ui/layout";
import PlayIcon from "./PlayIcon";
import "./pulseAnimation.css";

export default function ButtonPlay() {
  return (
    <Center
      pr={["0px", "0px", "0px", "252px", "252px"]}
      mt={["60px", "60px", "60px", "0px", "0px"]}
    >
      <Flex
        title="CLick to play"
        color="white"
        bgColor="red"
        w="80px"
        h="80px"
        borderRadius="full"
        justifyContent="center"
        bg="linear-gradient(30deg, #ff8200 20%, #ff2600 80%)"
        transition="all .3s ease-in-out"
        boxShadow="0 0 0 0 hsl(182deg 74% 86% / 70%)"
        _hover={{ transform: "scale(1.2)" }}
        animation="1.2s cubic-bezier(0.8, 0, 0, 1) 0s normal none infinite running pulse"
      >
        <Center>
          <PlayIcon />
        </Center>
      </Flex>
    </Center>
  );
}
