import { Flex, Link } from "@chakra-ui/react";

export default function ContainerSocialNetworks({ data, mtSize, gap }) {
  return (
    <Flex mt={mtSize} gridGap={gap}>
      {data.map((e, i) => (
        <Link
          key={(i * Math.random() + 2) * 3}
          href={e.url}
          pl={e.pl}
          pt={e.pt}
          isExternal
          display="flex"
          w="20px"
          h="20px"
          title={e.socialNetwork}
        >
          {e.iconSvg}
        </Link>
      ))}
    </Flex>
  );
}
