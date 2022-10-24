import { Center, Flex, Heading } from "@chakra-ui/react";
import CardServicies from "./CardServicies";
import PizzaIcon from "./PizzaIcon";
import PlateIcon from "./PlateIcon";
import DeliveryCarIcon from "./DeliveryCarIcon";

export default function Section2() {
  const data = [
    {
      id: "71b20c57-e728-4dc2-a9e6-0a6d342503b4",
      title: "Delicious receipe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      iconSvg: <PizzaIcon />,
    },
    {
      id: "bf5e1165-b2b8-463b-b497-e579f93bcbd2",
      title: "Order your food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      iconSvg: <PlateIcon />,
    },
    {
      id: "99280935-34bf-456c-8e5e-ac7f3e14e47d",
      title: "Delivery or pick up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      iconSvg: <DeliveryCarIcon />,
    },
  ];

  return (
    <Flex w="full" py="122px" justifyContent="center" flexDirection="column">
      <Heading
        textAlign="center"
        fontFamily="'Montserrat', sans-serif !important"
        mb="60px"
      >
        About Pizza
      </Heading>
      <Center
        flexDirection={["column", "column", "column", "row", "row"]}
        gridGap="30px"
      >
        {data.map((e) => (
          <CardServicies
            key={e.id}
            title={e.title}
            description={e.description}
            iconSvg={e.iconSvg}
          />
        ))}
      </Center>
    </Flex>
  );
}
