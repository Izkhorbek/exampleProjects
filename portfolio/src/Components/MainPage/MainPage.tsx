import Navbar from "../Common/Navbar/Navbar";
import About from "../About/About";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";

function MainPage() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default MainPage;
