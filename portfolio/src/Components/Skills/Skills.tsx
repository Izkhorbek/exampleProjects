import { SkillData } from "../../Service/SkillData";
import Slider from "react-slick";
const Skills = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 2000,
    autoplaySpeed: 1500,
    rows: 2,
    slidesPerRow: 2,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true
  };
  return (
    <div>
      <div className="container">
        <div className="p-4 space-y-5">
          <h1 className="text-xl text-slate-500 font-semibold tracking-wider uppercase font-sans ">
            My skills
          </h1>
          <h1
            className="
            text-[50px]
            text-green-500
            font-semibold
            tracking-wider
            uppercase
            font-sans"
          >
            Technologies
          </h1>
          <Slider {...settings}>
            {SkillData.map((item, index) => (
              <div key={index}>
                <div className="p-4 flex flex-col justify-items-center items-center gap-4 shadow-xl hover:scale-110">
                  <a href={item.url} target="_blank">
                    <img src={item.img} alt="" className="object-cover" />
                  </a>
                  <h1 className="md:text-3xl text-2xl font-semibold">
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Skills;
