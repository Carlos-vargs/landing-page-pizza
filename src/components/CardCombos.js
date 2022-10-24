import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import PricingSvg from "../resources/icons/PriceIcon";

export default function CardCombos({ data }) {
  const userScreen = window.screen.width;
  const nonAnimatedScreen = 1280;

  return (
    <Flex
      w="316px"
      bg="white"
      alignItems="flex-start"
      boxShadow="0 3px 20px 0px rgb(0 0 0 / 12%)"
      pb="40px"
      data-aos={
        userScreen > nonAnimatedScreen ? `fade-${data.animation}` : "none"
      }
      data-aos-delay={userScreen > nonAnimatedScreen ? "50" : "none"}
      data-aos-duration={userScreen > nonAnimatedScreen ? "700" : "none"}
      data-aos-easing={userScreen > nonAnimatedScreen ? "ease-in-out" : "none"}
    >
      <Center flexDirection="column" w="full">
        <PricingSvg price={data.price} fillValue={data.color} />
        <Text
          fontSize="28px"
          textTransform="uppercase"
          fontWeight="600"
          as="h3"
          mb="30px"
        >
          {data.category}
        </Text>
        <Flex gridGap="30px" flexDirection="column">
          {data.infoCombo.map((e) => (
            <Text key={e.id}>{e.name}</Text>
          ))}
        </Flex>
        <Box mt="30px">
          <Button
            variant="outline"
            width="190px"
            color="ferrariRed.900"
            _hover={{
              color: "white",
              _after: { left: 0 },
              borderColor: "ferrariRed.900",
              backgroundColor: "transparent",
            }}
          >
            buy now
          </Button>
        </Box>
      </Center>
    </Flex>
  );
}
