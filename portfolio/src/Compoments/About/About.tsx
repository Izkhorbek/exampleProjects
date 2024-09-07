interface skillReview {
  id: number;
  image: string;
  skillName: string;
}
const mySkillReview: skillReview[] = [
  {
    id: 0,
    image: "",
    skillName: "Software Developer"
  },
  {
    id: 1,
    image: "",
    skillName: "Front-end Developer"
  },
  {
    id: 2,
    image: "",
    skillName: "Back-end Developer"
  },
  {
    id: 3,
    image: "",
    skillName: "Full-stack developer"
  }
];

function About() {
  return (
    <div>
      <div className="container">
        <div className="w-full h-[600px]">
          {/* Introduction */}
          <h1>Introduction</h1>
          <h2>OverView</h2>
          {/* Self-Introduction Text */}
          <div></div>
          {/* Simple Experience */}
          <div>
            <div
              className="w-[180px] h-[200px] rounded-xl bg-slate-800
            text-white flex items-center justify-center drop-shadow-2xl"
            >
              <div className="flex flex-col gap-10">
                <img src="" alt="" />
                <h1 className=" text-gray-200 ">Front-end Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
