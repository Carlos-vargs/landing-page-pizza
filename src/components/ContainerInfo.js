import { Flex } from "@chakra-ui/react";
import CardInfo from "./CardInfo";
import EnvelopeIcon from "../resources/icons/EnvelopeIcon";
import GpsIcon from "../resources/icons/GpsIcon";
import PhoneIcon from "../resources/icons/PhoneIcon";

export default function ContainerInfo() {
  const info = [
    {
      id: "7b50311f-a4d0-48b0-ade6-12607e823ad3",
      icon: <PhoneIcon />,
      description: "01 234 567 785 542",
    },
    {
      id: "348cb08a-fcc5-4abc-a5ce-cdf8b447dc69",
      icon: <EnvelopeIcon />,
      description: "donPizzon44@gmail.com",
    },
    {
      id: "b0522b63-ef5b-4853-b949-7a4a4a80964e",
      icon: <GpsIcon />,
      description: "Kenton, Colorado(CO), 3381 River Road",
    },
  ];

  return (
    <Flex gridGap="20px" flexDirection="column">
      {info.map((e) => (
        <CardInfo key={e.id} icon={e.icon} description={e.description} />
      ))}
    </Flex>
  );
}
