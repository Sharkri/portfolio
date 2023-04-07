import ContactFooter from "./components/sections/ContactFooter";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

import StarsScene from "./components/StarsScene";

import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/sections/About";

function App() {
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

export default App;
