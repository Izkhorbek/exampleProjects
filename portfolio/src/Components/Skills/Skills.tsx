import { SkillData } from "../../Service/SkillData";
const Skills = () => {
  console.log(SkillData[0].img);
  return (
    <div>
      <div className="container">
        <div className="p-4">
          <h1>My skills</h1>
          <h1>Technologies</h1>
          <div className="h-[256px] w-[256px] justify-items-center items-center">
            <a
              href={SkillData[0].url}
              rel="noreferrer"
              target="_blank"
              className="mb-2 text-2xl font-semibold tracking-tight text-white text-center "
            >
              <img src={SkillData[0].img}></img>
            </a>
            <h1>{SkillData[0].name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
