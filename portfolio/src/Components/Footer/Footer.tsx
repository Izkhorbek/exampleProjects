import FooterImg from "../../../public/assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%"
};

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="text-white h-[100px] md:h-[300px]" style={BannerImg}>
        {/* Container */}
        <div className="container">
          <div className="flex justify-end lg:translate-x-20">
            {/* Social Links */}
            <div data-aos="fade-up" data-aos-duration="800" className="text-sm">
              <div className="flex items-center gap-3 mt-8">
                <a href="https://github.com/Izkhorbek/React" target="_blank">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/izkhorbek-ilhom/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-3">
                  <FaLocationArrow />
                  <p>Incheon, South Korea</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>(+82)10-3746-4440</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
