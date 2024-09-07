import About from "../../About/About";
import Navbar from "../../Common/Navbar/Navbar";
import Home from "../Home/Home";

function MainPage() {
  return (
    <div className="h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default MainPage;
