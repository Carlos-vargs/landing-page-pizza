import { Box, Heading, Text } from "@chakra-ui/react";
import Btn from "../../Btn";

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
      <Box>
        <Btn
          title={phoneNumber}
          bgColor={"transparent"}
          bgHoverColor={"#ff2600"}
          textColor={"white"}
          textHoverColor={"white"}
          borderColor={"white"}
          modifyTheWidth={"190px"}
          modifyFontSize={"14px"}
          modifyBorderColor={"#ff2600"}
        />
      </Box>
    </Box>
  );
}
