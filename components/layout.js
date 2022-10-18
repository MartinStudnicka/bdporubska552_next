import Header from "./header";
//import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}