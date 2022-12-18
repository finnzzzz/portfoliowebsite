import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Motivation from "./components/motivation/Motivation";
import Course from "./components/course/Course";
import Work from "./components/work/Work";
import Reason from "./components/reason/Reason";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Motivation />
        <Course />
        <Work />
        <Reason />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
