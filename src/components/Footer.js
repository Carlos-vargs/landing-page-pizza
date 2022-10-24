import Facebook from "./social_networks/Facebook";
import Instagram from "./social_networks/Instagram";
import Github from "./social_networks/Github";
import Twitter from "./social_networks/Twitter";
import Logo from "./Logo";
import { Center, Flex, Text } from "@chakra-ui/react";
import ContainerSocialNetworks from "./ContainerSocialNetworks";

export default function Footer() {
  const copyRight = `© 2021. carlosvargs.Made With Love by.`;
  const dev = "Carlos Vargas";
  const motto = "Healthy Food For Healthy Body";

  const socialNetworks = [
    {
      socialNetwork: "Facebook",
      iconSvg: <Facebook />,
      pl: "6px",
    },
    {
      socialNetwork: "Instagram",
      iconSvg: <Instagram />,
      url: "https://www.instagram.com/nc_cvargas",
    },
    {
      socialNetwork: "Github",
      iconSvg: <Github />,
      url: "https://github.com/Carlos-vargs",
    },
    {
      socialNetwork: "Twitter",
      iconSvg: <Twitter />,
      url: "https://twitter.com/nc_cvargas",
      pt: "2px",
    },
  ];

  return (
    <Flex
      p="101px 0px"
      bg="linear-gradient(30deg, #ff8200 20%, #ff2600 80%)"
      justifyContent="center"
      color="white"
    >
      <Center flexDirection="column">
        <Logo
          wSize={["160px", "160px", "160px", "200px", "200px"]}
          hSize={"auto"}
        />
        <Text as="h6" mt="16px" fontSize="12px">
          {motto}
        </Text>
        <ContainerSocialNetworks
          data={socialNetworks}
          mtSize={"40px"}
          gap={"14px"}
        />
        <Text as="span" fontSize="13px" mt="20px" textAlign="center">
          {copyRight} <br />
          {dev}
        </Text>
      </Center>
    </Flex>
  );
}
