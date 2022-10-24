import ReadMore from "./ReadMore";
import StatisticsContainer from "./StatisticsContainer";
import { Flex, Text, Heading } from "@chakra-ui/react";

export default function InfoContainer() {
  return (
    <Flex
      flexDirection="column"
      gridGap={["20px", "20px", "20px", "38px", "38px"]}
      w={["full", "full", "600px", "500px", "500px"]}
      textAlign={["center", "center", "center", "left", "left"]}
    >
      <Text as="span">The best ingredients</Text>
      <Heading fontSize="46px" fontFamily="'Montserrat', sans-serif !important">
        Pizza ingredients
      </Heading>
      <Text
        whiteSpace="pre-wrap"
        lineHeight="30px"
        fontSize="18px"
        px={["20px", "20px", "20px", "0px", "0px"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea
        commodo consequat. Duis aute irure dolor in rep rehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <StatisticsContainer />
      <ReadMore />
    </Flex>
  );
}
