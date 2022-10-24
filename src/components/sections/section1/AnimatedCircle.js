import { Box } from "@chakra-ui/react";
import "./animations.css";

export default function AnimatedCircle() {
  return (
    <Box
      animation="move 15s infinite linear"
      position="absolute"
      top="40px"
      w="40px"
      h="40px"
      className="animated"
      borderRadius="full"
      bgColor="transparent"
      border="solid 6px #ff2600"
      zIndex="1"
    />
  );
}
