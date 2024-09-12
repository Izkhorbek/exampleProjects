import Navbar from "../Common/Navbar/Navbar";
import SkillGeometry from "../Common/SkillGeometry";
import About from "../About/About";
import Home from "../Home/Home";
import Skills from "../Pages/Skills/Skills";

function MainPage() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <SkillGeometry />
    </div>
  );
}

export default MainPage;
