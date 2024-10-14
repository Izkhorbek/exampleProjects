import Navbar from "../Common/Navbar/Navbar";
import About from "../About/About";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
function MainPage() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
