import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Damo from "./Components/Damo";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Team />
      <Damo />
      <Footer />
    </div>
  );
}
