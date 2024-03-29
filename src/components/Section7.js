import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import arrowDown from "../resources/images/arrow-down.png";
import ContainerInfo from "./ContainerInfo";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { useState } from "react";

export default function Section7() {
  const user = JSON.parse(localStorage.getItem("form"));

  if (!user) {
    localStorage.setItem("form", JSON.stringify([]));
  }

  const [isOpen, setisOpen] = useState(false);

  function setClose() {
    setisOpen(false);
  }

  const [state, setState] = useState({
    loading: false,
    error: null,
    form: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("form", JSON.stringify(state.form));
    if (state.form) {
      setisOpen(true);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      px={["20px", "20px", "160px", "160px", "160px"]}
      flexDirection={["column", "column", "column", "row", "row"]}
      mb="200px"
    >
      <Center
        mt={["0px", "0px", "0px", "85px", "85px"]}
        alignItems="flex-start"
        flexDirection="column"
      >
        <Heading
          as="h3"
          mb="20px"
          fontSize="29px"
          fontFamily="'Montserrat', sans-serif !important"
          fontWeight="600"
        >
          Contact Info
        </Heading>
        <ContainerInfo />
      </Center>
      <Center alignItems="flex-start" flexDirection="column" mt="20px">
        <Heading
          fontSize={["29px", "29px", "29px", "46px", "46px"]}
          fontFamily="'Montserrat', sans-serif !important"
          fontWeight="600"
          position="relative"
        >
          Contact Hear
          <Image src={arrowDown} position="absolute" right="-70px" top="0" />
        </Heading>
        <ContactForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          formValues={state.form}
        >
          <Button
            variant="outline"
            fontSize="12px"
            type="submit"
            marginBlockStart="20px"
            marginInline={["auto", "auto", "auto", "0px", "0px"]}
            color="ferrariRed.900"
            _hover={{
              color: "white",
              _after: { left: 0 },
              borderColor: "ferrariRed.900",
              backgroundColor: "transparent",
            }}
          >
            send messsage
          </Button>
        </ContactForm>

        <Modal isOpen={isOpen} onClose={setClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bgColor="ferrariRed.900">
              <Logo wSize={"100px"} hSize={"50px"} />
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody textAlign="center" lineHeight="30px" mt="20px">
              {`Hello ${user?.name}, Thank you for sending your request in a few minutes you will be attended`}
            </ModalBody>

            <ModalFooter>
              <Button
                variant="outline"
                onClick={setClose}
                fontSize="12px"
                type="submit"
                marginBlockStart="20px"
                marginInline={["auto", "auto", "auto", "0px", "0px"]}
                color="ferrariRed.900"
                _hover={{
                  color: "white",
                  _after: { left: 0 },
                  borderColor: "ferrariRed.900",
                  backgroundColor: "transparent",
                }}
              >
                close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Flex>
  );
}
