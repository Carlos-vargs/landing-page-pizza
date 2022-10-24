import { Button, ButtonGroup } from "@chakra-ui/react";

function ButtonsContainer() {
  return (
    <ButtonGroup
      paddingInlineStart={["0px", "0px", "0px", "106px", "106px"]}
      paddingBlockStart="40px"
      gridGap="12px"
      marginInline={["auto", "auto", "auto", "0px", "0px"]}
      flexWrap="wrap"
      justifyContent={[
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ]}
      variant="outline"
    >
      <Button fontSize="12px">view our services</Button>
      <Button fontSize="12px">view our menu</Button>
    </ButtonGroup>
  );
}

export default ButtonsContainer;
