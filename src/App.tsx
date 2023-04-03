import ContactFooter from "./components/ContactFooter";
import Header from "./components/Header";
import StarsScene from "./components/StarsScene";

function App() {
  return (
    <div>
      <StarsScene />

      <div className="absolute w-full">
        <Header />

        <h1 className="text-white">Hi there! :wave: I&apos;m Sharks Ri</h1>

        <ContactFooter />
      </div>
    </div>
  );
}

export default App;
