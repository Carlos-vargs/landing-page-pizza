import { Flex } from "@chakra-ui/react";
import Btn from "./Btn";

function ButtonsContainer() {
  return (
    <Flex
      pl={["0px", "0px", "0px", "106px", "106px"]}
      pt="40px"
      gridGap="12px"
      mx={["auto", "auto", "auto", "0px", "0px"]}
      flexWrap="wrap"
      justifyContent={[
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ]}
    >
      <Btn
        title={"view our services"}
        bgColor={"transparent"}
        bgHoverColor={"#ff2600"}
        textColor={"white"}
        textHoverColor={"white"}
        borderColor={"#ff2600"}
        modifyBorderColor={"#ff2600"}
      />
      <Btn
        title={"view our menu"}
        bgColor={"transparent"}
        bgHoverColor={"#ff2600"}
        textColor={"white"}
        textHoverColor={"white"}
        borderColor={"#ff2600"}
        modifyBorderColor={"#ff2600"}
      />
    </Flex>
  );
}

export default ButtonsContainer;
