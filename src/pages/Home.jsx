import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Contact from "../components/ContactUs/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Menu />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;