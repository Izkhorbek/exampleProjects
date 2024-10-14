import mySkillReview from "./../../assets/data/SkillsReview";
import { Courses, ICourse } from "../../assets/data/Courses";
import { LiaUniversitySolid } from "react-icons/lia";
import { SiUdemy } from "react-icons/si";
function About() {
  return (
    <section id="about">
      <div className="container space-y-2 pb-8">
        {/* Introduction */}
        <h1 className="text-title_name">About me</h1>
        <h2 className="text-slate-600 font-black md:text-[40px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Overview
        </h2>
        {/* Self-Introduction Text */}
        <div
          data-aos="fade-right"
          className="text-gray-600  leading-loose tracking-normal font-semibold indent-6 text-justify px-2"
        >
          Skilled software developer with over three years of experience in both
          server-side and client-side desktop application and Web API
          development. Recently transitioned into web development, building real
          applications using modern web technologies for the past year.
          Proficient in HTML, CSS, JavaScript, TypeScript, TailwindCSS,
          React/Redux, and Node.js. Demonstrates strong problem-solving
          abilities, excellent communication skills, and a continuous passion
          for learning and innovation. Known for being patient, energetic, and a
          dedicated team player with a love for technology and a knack for
          tackling complex challenges..
        </div>

        {/* Simple Experience */}
        <div
          className="flex flex-col
           justify-around md:flex-row gap-5 items-center md:flex-wrap"
        >
          {mySkillReview.map((item) => (
            <div
              data-aos="fade-right"
              data-aos-delay={`${150 * item.id}`}
              key={item.id}
              className="w-[180px] h-[200px] rounded-xl bg-slate-800
            text-white flex items-center justify-center shadow-2xl drop-shadow-2xl px-5"
            >
              <div
                className="flex flex-col gap-10 justify-items-center 
                h-30 items-center"
              >
                <img
                  src={item.image}
                  alt=""
                  className="size-12 justify-center"
                />
                <h1 className="text-gray-200 h-12 text-center text-pretty">
                  {item.skillName}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-slate-600 font-black md:text-[40px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins pt-4">
          Education and Course
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-2">
          <div className="flex flex-col font-semibold gap-3">
            <div data-aos="fade-up" data-aos-delay="150">
              <div className="flex items-center gap-2">
                <LiaUniversitySolid className="size-6" />
                <h1>
                  Master's Degree in Electrical and Elech1onic Engineering
                </h1>
              </div>
              <a
                href="https://en.honam.ac.kr/"
                target="_blank"
                className="text-green-400"
              >
                Honam University in South Korea
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-2">
                <LiaUniversitySolid className="size-6" />
                <h1>Bachelor's Degree in Computer Science</h1>
              </div>
              <a
                href="https://tuit.uz/"
                target="_blank"
                className="text-green-400"
              >
                TUIT in Uzbekistan
              </a>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col font-semibold gap-3">
            {Courses.map((itemCourse: Partial<ICourse>) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${150 * (itemCourse.id ?? 0)}`}
                key={itemCourse.id}
              >
                <div className="flex items-center gap-2">
                  <SiUdemy className="size-6" />
                  <h1>
                    {itemCourse.website}, &nbsp; date: {itemCourse.date}, &nbsp;
                    hours: {itemCourse.length}
                  </h1>
                </div>
                <a
                  href={itemCourse.linkSertificate}
                  target="_blank"
                  className="text-green-400"
                >
                  {itemCourse.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
