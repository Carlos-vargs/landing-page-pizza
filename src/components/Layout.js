import Footer from "./Footer";
import NavMenu from "./NavMenu";

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
}
