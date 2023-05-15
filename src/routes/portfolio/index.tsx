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

        <div className="grow flex flex-col gap-8 px-10 max-w-[1440px] mx-auto pt-[92px]">
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
