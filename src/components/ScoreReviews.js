import { Flex, Text } from "@chakra-ui/react";

export default function ScoreReviews({ score, title }) {
  return (
    <Flex
      fontFamily="'Montserrat',sans-serif !important"
      flexDirection="column"
      border="solid 2px white"
      borderRadius="40px"
      p={[
        "13px 30px 16px 40px",
        "13px 30px 16px 40px",
        "13px 30px 16px 40px",
        "13px 60px 16px 40px",
        "13px 60px 16px 40px",
      ]}
      borderTopRightRadius="0px"
    >
      <Text as="h4" fontSize="42px" fontWeight="500">
        {score}+
      </Text>
      <Text>{title}</Text>
    </Flex>
  );
}
