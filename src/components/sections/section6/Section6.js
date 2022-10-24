import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import CardCombos from "./CardCombos";

export default function Section6() {
  const data = [
    {
      id: "540c32ae-138a-4966-920e-521a4809d92a",
      category: "standard",
      animation: "right",
      color: "#FF8201",
      price: "16",
      infoCombo: [
        {
          id: "c1951e67-821232scvc-f2-85ec-c8065a225509",
          name: "1 pizza",
        },
        {
          id: "846wr3421x-9yhny6-448b-a63c-aa3c429db52e",
          name: "2 Hot dog",
        },
        {
          id: "559aad42-6f83-4deb-b617-5eeev-efrtfc-8173caac",
          name: "1 Pepsi 2.25 Lts",
        },
      ],
    },
    {
      id: "cc5604ff-704a-4453-ac56-83036eb66e7e",
      category: "familiar",
      animation: "up",
      color: "#FF2601",
      price: "24",
      infoCombo: [
        {
          id: "c1951e67-80b2-4382-85ec-232322rfg-225509",
          name: "2 pizza",
        },
        {
          id: "84679476-5fa6-448b-a63c-aahhfddgty678898-29db52e",
          name: "2 Meat Lovers",
        },
        {
          id: "559aad42-6f83-4deb-b6tyg-567544f3caac",
          name: "1 coca-cola 3 Lts",
        },
      ],
    },
    {
      id: "61f4102b-de05-4960-bb62-bf3a960873bc",
      category: "premium",
      animation: "left",
      color: "#FF8201",
      price: "30",
      infoCombo: [
        {
          id: "c1951e67-80b2-4382-85ec-c8065a225509",
          name: "4 pizza",
        },
        {
          id: "84679476-5fa6-448b-a63c-aa3c429db52e",
          name: "Large cheese sticks",
        },
        {
          id: "559aad42-6f83-4deb-b617-5eed8173caac",
          name: "2 coca-cola 3 Lts",
        },
      ],
    },
  ];

  return (
    <Flex
      my="96px"
      justifyContent="center"
      fontFamily="'Montserrat', sans-serif !important"
    >
      <Center flexDirection="column" gridGap="40px" textAlign="center">
        <Heading>Party packages</Heading>
        <Text lineHeight="30px" px="20px">
          The best combos for your parties. If you purchase any of the 3 combos{" "}
          <br />
          in the next few minutes you will get a 25% discount.
        </Text>
        <Flex
          flexDirection={["column", "column", "column", "row", "row"]}
          gridGap="40px"
          textAlign="center"
        >
          {data.map((e) => (
            <CardCombos key={e.id} data={e} />
          ))}
        </Flex>
      </Center>
    </Flex>
  );
}
