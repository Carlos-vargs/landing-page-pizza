import { Button, Text } from "@chakra-ui/react";

export default function Btn({
  title,
  bgColor,
  bgHoverColor,
  textColor,
  textHoverColor,
  borderColor,
  modifyTheHeight,
  modifyTheWidth,
  modifyFontSize,
  modifyBorderColor,
  type,
}) {
  return (
    <Button
      type={type}
      py="18px"
      borderRadius="3xl"
      w={modifyTheWidth ? modifyTheWidth : "170px"}
      h={modifyTheHeight ? modifyTheHeight : "48px"}
      color={textColor}
      bgColor={bgColor}
      borderWidth="2px"
      borderColor={borderColor}
      transition="all .5s ease"
      fontFamily="'Montserrat', sans-serif"
      overflow="hidden"
      textTransform="uppercase"
      fontSize={modifyFontSize ? modifyFontSize : "12px"}
      _hover={{
        borderColor: modifyBorderColor,
        background: bgHoverColor,
        color: textHoverColor,
        _after: {
          left: 0,
        },
      }}
      _after={{
        content: `""`,
        width: "220px",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: "calc(-100% - 52px)",
        borderBottom: "52px solid #ff2600",
        borderRight: "52px solid transparent",
        transition: ".4s ease-in-out all",
      }}
    >
      <Text as="span" zIndex="2">
        {title}
      </Text>
    </Button>
  );
}
