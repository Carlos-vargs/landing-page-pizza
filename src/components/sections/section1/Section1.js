import { Flex, Center, Image } from "@chakra-ui/react";
import bgImage from "../../../resources/images/home-bg.jpg";
import deliveryMan from "../../../resources/images/delivery-man.png";
import Logo from "../../Logo";
import ButtonsContainer from "./ButtonsContainer";
import TittleS1 from "./TittleS1";

export default function Section1() {
  return (
    <Flex
      position="relative"
      bgImg={`url(${bgImage})`}
      color="white"
      w="full"
      h="960px"
      bgPosition={["top", "top", "top", "center", "center"]}
      bgSize={["auto", "auto", "auto", "cover", "cover"]}
      flexDirection="column"
    >
      <Logo
        mtSize={["40px", "40px", "50px", "90px", "90px"]}
        wSize={["200px", "200px", "300px", "auto", "auto"]}
      />
      <Center
        flexDirection={["column", "column", "column", "row", "row"]}
        justifyContent="flex-start"
        pl={["0px", "0px", "0px", "106px", "106px"]}
      >
        <TittleS1 />
      </Center>
      <Image
        src={deliveryMan}
        objectFit="cover"
        w={["380px", "380px", "350px", "480px", "540px"]}
        h="auto"
        position="absolute"
        bottom="0"
        left="50%"
        transform={[
          "translateX(-50%)",
          "translateX(-50%)",
          "translateX(-50%)",
          "translateX(-10%)",
          "translateX(-10%)",
        ]}
      />
      <ButtonsContainer />
    </Flex>
  );
}
