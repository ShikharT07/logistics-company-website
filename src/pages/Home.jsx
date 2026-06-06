import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <Stats />
      <CTA />

      <Footer />
    </>
  );
}

export default Home;