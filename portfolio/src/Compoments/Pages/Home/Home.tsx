import myImage from "./../../../../public/assets/image/myImage.jpg";
import worldMapBlack from "./../../../../public/assets/world-map-black.jpeg";

function Home() {
  return (
    <div className="relative z-0">
      <div className="container">
        <div className="h-[600px]  content-center">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center content-around">
            <div>
              {/* ism and Description */}
              <h1 className="text-3xl md:text-4xl font-bold flex leading-normal tracking-tighter">
                Hello, I am Izhorbek Tursunov
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ducimus ullam, architecto sequi maiores maxime tenetur
                magnam. Culpa, sequi ullam minima dignissimos eligendi sed,
                itaque, veritatis magnam perferendis doloribus nisi.
              </p>
            </div>
            {/* Image of my */}
            <div className="content-center">
              <img
                src={myImage}
                alt=""
                className="size-[120px] object-cover  rounded-full"
              />
            </div>
            <div className="my-3 space-x-7">
              <button
                className="text-white text-sm md:text-lg  hover:opacity-85
              duration-300 hover:scale-105 font-semibold rounded-3xl px-3 py-2 bg-[#465697]"
              >
                Contact me{" "}
              </button>
              <button
                className="text-white text-sm md:text-lg  hover:opacity-85
              duration-300 hover:scale-105 font-semibold rounded-3xl px-3 py-2 bg-[#465697]"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* backGround Image */}
      <div className="absolute top-0 md:-top-40 lg:-top-40 right-0 -z-20">
        <img
          src={worldMapBlack}
          alt="world map"
          className="opacity-10 object-cover"
        />
      </div>
      {/* Scroll */}
      <div
        className="w-absolute w-full flex justify-center 
      items-center absolute bottom-0"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4
          flex justify-center items-center p-2 border-slate-400"
          >
            <div className="w-2 h-3 rounded-full bg-slate-500 animate-bounce mt-2"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
