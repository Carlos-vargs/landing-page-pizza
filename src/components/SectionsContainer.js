import Layout from "./Layout";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section7 from "./sections/section7/Section7";

export default function SectionsContainer() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Layout>
  );
}
