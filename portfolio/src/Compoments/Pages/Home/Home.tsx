import myImage from "./../../../../public/assets/image/myImage.jpg";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="h-[400px]  border border-red-500 content-center">
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
    </div>
  );
}

export default Home;
