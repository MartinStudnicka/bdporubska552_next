import Header from "./header";
//import { Main } from "next/document";
import Footer from "./footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
      
      <Footer />
    </>
  )
}