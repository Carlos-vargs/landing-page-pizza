import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function BookOnline({ phoneNumber }) {
  return (
    <Box
      display="flex"
      justifyContent={[
        "flex-start",
        "flex-start",
        "center",
        "center",
        "center",
      ]}
      flexDirection="column"
      gridGap="44px"
      mt={["26px", "26px", "0px", "0px", "0px"]}
      textAlign={["center", "center", "left", "left", "left"]}
    >
      <Heading
        fontWeight="600"
        fontSize="45px"
        fontFamily="'Montserrat', sans-serif !important"
      >
        Book Online
      </Heading>
      <Text fontSize="17px" fontWeight="400" lineHeight="30px">
        Lorem ipsum dolor sit amet, consectetur <br />
        adipisicing elit
      </Text>
      <Button variant="outline" width="190px">
        {phoneNumber}
      </Button>
    </Box>
  );
}
