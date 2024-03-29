import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"
import SectionsContainer from "./components/SectionsContainer";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SectionsContainer />
    </ChakraProvider>
  );
}
