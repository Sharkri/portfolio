import ContactFooter from "./components/ContactFooter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import StarsScene from "./components/StarsScene";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <StarsScene />

      <div className="absolute w-full h-full flex flex-col justify-between">
        <Header />

        <main className="grow flex flex-col gap-4 px-10 max-w-[1440px] mx-auto">
          <Hero />
          <Projects />
        </main>

        <ContactFooter />
      </div>
    </div>
  );
}

export default App;
