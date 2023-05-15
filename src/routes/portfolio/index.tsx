import StarsScene from "./components/StarsScene";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";

function Portfolio() {
  return (
    <div className="text-white">
      <StarsScene />

      <div className="absolute w-full h-full flex flex-col justify-between">
        <Header />

        <div className="grow flex flex-col gap-14 px-8 max-w-[1440px] mx-auto pt-12">
          <Hero />
          <About />
          <Projects />
          <ContactFooter />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
