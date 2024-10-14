import { SkillData } from "../../assets/data/SkillData";
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
    <section id="skills">
      <div className="container">
        <div className="p-4 space-y-5">
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
                <div className="p-4 flex flex-col justify-items-center items-center gap-4 hover:shadow-xl hover:scale-110 transform duration-300 ease-out">
                  <a href={item.url} target="_blank">
                    <img src={item.img} alt="" className="object-cover" />
                  </a>
                  <h1 className="md:text-3xl text-sm font-semibold">
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Skills;
