import { Box, Flex } from "@chakra-ui/react";
import "../styles/animations.css";

export default function AnimatedTriangle() {
  return (
    <Flex
      position="absolute"
      left={["-140px", "-140px", "-140px", "-142px", "-142px"]}
      w="112px"
      h="112px"
      top="0"
      animation="rotate 20s infinite linear"
    >
      <Box className="rounded-triangle" />
    </Flex>
  );
}
