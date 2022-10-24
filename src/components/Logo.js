import LogoImage from "../resources/images/don-pizzon-logo.png";
import { Box, Image } from "@chakra-ui/react";

export default function Logo({ wSize, hSize, mtSize }) {
  return (
    <Box w={wSize} h={hSize} mt={mtSize} objectFit="cover" mx="auto">
      <Image src={LogoImage} />
    </Box>
  );
}
