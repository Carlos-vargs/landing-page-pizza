import { Flex, Stack, Text, Heading } from "@chakra-ui/react";
import bgImage from "../../../resources/images/icon-bg.png";

export default function CardServicies({ title, description, iconSvg }) {
  return (
    <Stack
      w={["320px", "320px", "380px", "400px", "400px"]}
      h="400px"
      boxShadow="0 3px 20px 0px rgb(0 0 0 / 12%)"
      borderRadius="3xl"
      textAlign="center"
      justifyContent="center"
      p="22px"
      transition="all .2s ease-out"
      _hover={{
        transform: "translateY(-10px)",
      }}
    >
      <Flex
        position="relative"
        bgImg={`url(${bgImage})`}
        color="white"
        w="130px"
        h="130px"
        bgRepeat="no-repeat"
        mx="auto"
      >
        {iconSvg}
      </Flex>
      <Heading fontSize="22px">{title}</Heading>
      <Text fontSize="16px" lineHeight="30px">
        {description}
      </Text>
    </Stack>
  );
}
