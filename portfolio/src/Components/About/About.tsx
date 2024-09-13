import imgBackend from "./../../../public/assets/image/backend.png";
import imgFrontend from "./../../../public/assets/image/frontend.png";
import imgSoftware from "./../../../public/assets/image/software-development.png";
import imgDatabase from "./../../../public/assets/image/database.png";
import imgFullStack from "./../../../public/assets/image/fullstack.jpg";

interface skillReview {
  id: number;
  image: string;
  skillName: string;
}
const mySkillReview: skillReview[] = [
  {
    id: 0,
    image: imgSoftware,
    skillName: "Software Developer"
  },
  {
    id: 1,
    image: imgFrontend,
    skillName: "Front-end Developer"
  },
  {
    id: 2,
    image: imgBackend,
    skillName: "Back-end Developer"
  },
  {
    id: 3,
    image: imgFullStack,
    skillName: "Full-stack developer"
  },
  {
    id: 4,
    image: imgDatabase,
    skillName: "Database Management"
  }
];

function About() {
  return (
    <div className="">
      <div className="container space-y-2 pb-8">
        {/* Introduction */}
        <h1 className="sm:text-[20px] text-[16px] uppercase tracking-wider font-semibold font-mono text-gray-500">
          Introduction
        </h1>
        <h2 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Overview.
        </h2>
        {/* Self-Introduction Text */}
        <div className="text-gray-600  leading-loose tracking-normal font-semibold indent-6 text-justify px-2">
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
      </div>
    </div>
  );
}

export default About;
