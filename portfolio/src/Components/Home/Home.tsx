import PDFPresume from "../../assets/data/PDFResume";
import TextChange from "../Common/TextChange";
import myImage from "./../../../public/assets/image/imageMy.jpg";
import worldMapBlack from "./../../../public/assets/world-map-black.jpeg";

function Home() {
  const texts: string[] = [
    "Hello, I`m Izkhorbek Tursunov",
    "I`m Front-end Web developer"
  ];

  const handleDownloadBtn = (lang: string) => {
    let pdfUrl: string;
    if (lang === "eng") {
      pdfUrl = PDFPresume.ENG;
    } else {
      pdfUrl = PDFPresume.KOR;
    }
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Izkhorbek Tursunov CV.pdf";
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative z-0 w-full h-screen">
      {/* backGround Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden ">
        <img
          src={worldMapBlack}
          alt="world_map"
          className="opacity-10 w-full h-full object-cover"
        />
      </div>
      <div className="container h-screen content-center">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center">
          <div className="space-y-5">
            {/* ism and Description */}
            <h1 className="text-3xl md:text-4xl font-bold flex leading-normal tracking-tighter text-green-600">
              <TextChange texts={texts} />
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ducimus ullam, architecto sequi maiores maxime tenetur magnam.
              Culpa, sequi ullam minima dignissimos eligendi sed, itaque,
              veritatis magnam perferendis doloribus nisi.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="my-3 space-x-7 pt-10"
            >
              {/* <button
                className="text-white text-sm md:text-lg transition-all duration-300 hover:scale-105 font-semibold rounded-3xl px-3 py-2 
              bg-sky-600 hover:bg-sky-800"
              >
                <a href="#contact">Contact me </a>
              </button> */}
              <button
                onClick={() => handleDownloadBtn("eng")}
                className="text-white text-sm md:text-lg transition-all duration-300 hover:scale-105 font-semibold rounded-3xl px-3 py-2 
               bg-sky-600 hover:bg-sky-800"
              >
                Download CV Eng
              </button>
              <button
                onClick={() => handleDownloadBtn("kor")}
                className="text-white text-sm md:text-lg transition-all duration-300 hover:scale-105 font-semibold rounded-3xl px-3 py-2 
               bg-sky-600 hover:bg-sky-800"
              >
                Download CV Kor
              </button>
            </div>
          </div>
          {/* Image of my */}
          {/* <div
            // data-aos="fade-down"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            className="md:size-[300px] size-[150px] rounded-3xl overflow-hidden hover:scale-125 transition-all duration-300"
          >
            <img src={myImage} alt="" className="object-contain" />
          </div> */}
          <div
            className="transition-[border-radius] duration-[1s] md:size-[350px] size-[150px] 
          ease-[ease-out] animate-[morph_5s_ease-in-out_infinite_both_alternate]  
          overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
          >
            <div className="bg-cover w-[100%] h-[100%]  left-[-15%] top-[-10%] ">
              <img src={myImage} alt="" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
