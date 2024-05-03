import StarsScene from "./components/StarsScene";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import Footer from "./components/main/Footer";

function Portfolio() {
  return (
    <div>
      <StarsScene />

      <div className="w-full h-full flex flex-col justify-between">
        <Header />

        <div className="grow flex flex-col gap-14 md:gap-20 px-8 pt-12">
          <Hero />
          <div className="max-w-[1440px] mx-auto flex-flex-col space-y-16">
            <About />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
