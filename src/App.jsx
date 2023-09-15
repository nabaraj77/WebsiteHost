import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
