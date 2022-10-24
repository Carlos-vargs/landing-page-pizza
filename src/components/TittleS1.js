import { Box, Heading, Text } from "@chakra-ui/react";
import AnimatedCircle from "./AnimatedCircle";
import AnimatedTriangle from "./AnimatedTriangle";

export default function TittleS1() {
  return (
    <Box position="relative">
      <AnimatedCircle />
      <Heading
        as="h1"
        fontSize={["30px", "30px", "30px", "50px", "50px"]}
        lineHeight={["46px", "46px", "46px", "64px", "64px"]}
        fontWeight="600"
        textAlign={["center", "center", "center", "left", "left"]}
        fontFamily="'Montserrat', sans-serif !important"
        mt={["30px", "30px", "30px", "100px", "100px"]}
        position="relative"
        zIndex="25"
      >
        The Best Pizza <br />
        you will taste in <br />
        the whole country
      </Heading>
      <Text
        mt="20px"
        position="relative"
        zIndex="25"
        textAlign={["center", "center", "center", "left", "left"]}
      >
        We have the best chefs worldwide.
      </Text>
      <AnimatedTriangle />
    </Box>
  );
}
